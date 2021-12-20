<template>
  <LoadingCard v-if="isLoading" class="w-full h-full" />
  <div
    v-else
    class="h-full w-full flex flex-col bg-slate-100 rounded-xl font-bold font-sans shadow-md"
  >
    <div class="w-full h-10 pt-10 pl-5 mb-5 flex flex-row justify-between items-center">
      <div class="flex flex-col">
        <span class="text-2xl text-purple-900">Projects</span>
        <span class="text-sm lg:text-md text-gray-600">{{ projectCount }} Project</span>
      </div>
      <div class="mr-3">
        <div
          class="flex items-center justify-center bg-blue-500 hover:bg-blue-700 cursor-pointer h-5 w-5 p-4 text-white font-bold rounded-full"
          @click="openCreateProjectModal"
        >
          <i class="fas fa-plus mx-auto"></i>
        </div>
      </div>
    </div>
    <div class="h-5/6 bg-slate-100 flex flex-row justify-center items-center mt-5 pr-2">
      <div class="w-full h-full mt-5 rounded-xl overflow-y-auto">
        <div v-for="(item, id) in projects" :key="id" class="py-1">
          <ProjectListElement :project="item" class="mx-2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import store from '@/store';
  import { ProjectModel } from '@/types/models';
  import { apiService } from '@/services/apiService';
  import { USER_STORE } from '@/data/constants/vuexConstants';
  import { computed, defineComponent, onMounted, Ref, ref } from '@vue/runtime-core';
  import modalFunctions from '@/functions/modalFunctions';

  export default defineComponent({
    name: 'ProjectsCard',
    setup() {
      const projectCount = ref(0);
      const isLoading = ref(false);
      const projects: Ref<ProjectModel[]> = ref([]);

      const userId = computed(() => store.getters[USER_STORE.GETTERS.GET_USER_ID]);

      const getProjectCount = async function (): Promise<void> {
        isLoading.value = true;
        try {
          const count = await apiService.getProjectCount(userId.value);
          projectCount.value = count;
        } catch (error) {
          console.error(error);
        } finally {
          isLoading.value = false;
        }
      };

      const getProjectsByUserId = async function (): Promise<void> {
        isLoading.value = true;
        try {
          const response = await apiService.getProjectsByUserId(userId.value);
          projects.value = response.data.collection.reverse();
        } catch (error) {
          console.error(error);
        } finally {
          isLoading.value = false;
        }
      };

      const openCreateProjectModal = () => {
        modalFunctions.openModal({ componentName: 'CreateProjectModal' });
      };

      onMounted(async () => {
        await getProjectCount();
        await getProjectsByUserId();
      });

      return { projectCount, projects, isLoading, openCreateProjectModal };
    },
  });
</script>

<style></style>
