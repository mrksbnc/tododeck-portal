<template>
  <LoadingCard v-if="isLoading" class="w-full h-full" />
  <div
    v-else
    class="h-full w-full bg-gradient-to-tr from-yellow-400 to-amber-500 rounded-xl flex font-bold text-white font-sans shadow-md"
  >
    <div class="h-full w-full items-center flex text-3xl pl-6">
      <span>Important todos</span>
    </div>
    <div class="pr-8 pl-2 flex items-center font-sans">
      <span class="text-7xl">{{ importantTodoCount }}</span>
    </div>
  </div>
</template>

<script lang="ts">
  import store from '@/store';
  import { apiService } from '@/services/apiService';
  import { USER_STORE } from '@/data/constants/vuexConstants';
  import { notificationFunctions } from '@/functions/notificationFunctions';
  import { computed, defineComponent, onMounted, ref } from '@vue/runtime-core';

  export default defineComponent({
    name: 'ImportantCountCard',
    setup() {
      const isLoading = ref(false);
      const importantTodoCount = ref(0);

      const userId = computed(() => store.getters[USER_STORE.GETTERS.GET_USER_ID]);

      const getProjectCount = async () => {
        isLoading.value = true;
        try {
          const count = await apiService.getImportantCountByUserId(userId.value);
          importantTodoCount.value = count;
        } catch (error) {
          notificationFunctions.errorAlert({
            title: 'Something went wrong!',
            text: "Project count couldn't be fetched from server",
          });
        } finally {
          isLoading.value = false;
        }
      };

      onMounted(async () => {
        await getProjectCount();
      });

      return { isLoading, importantTodoCount };
    },
  });
</script>
