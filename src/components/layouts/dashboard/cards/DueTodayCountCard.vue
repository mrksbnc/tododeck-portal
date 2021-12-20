<template>
  <LoadingCard v-if="isLoading" class="w-full h-full" />
  <div
    v-else
    class="h-full w-full bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl flex font-bold text-white font-sans shadow-md"
  >
    <div class="h-full w-full items-center flex text-3xl pl-6">
      <span>Due today</span>
    </div>
    <div class="pr-8 pl-0 flex items-center font-sans">
      <span class="text-7xl">{{ dueTodayTaskCount }}</span>
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
    name: 'DueTodayCountCard',
    setup() {
      const isLoading = ref(false);
      const dueTodayTaskCount = ref(0);

      const userId = computed(() => store.getters[USER_STORE.GETTERS.GET_USER_ID]);

      const getDueTodayTodoCount = async () => {
        isLoading.value = true;
        try {
          const count = await apiService.getDueTodayTodoCount(userId.value);
          dueTodayTaskCount.value = count;
        } catch (error) {
          notificationFunctions.errorAlert({
            title: 'Something went wrong!',
            text: "Due today todo count couldn't be fetched from server",
          });
        } finally {
          isLoading.value = false;
        }
      };

      onMounted(async () => {
        await getDueTodayTodoCount();
      });

      return { isLoading, dueTodayTaskCount };
    },
  });
</script>
