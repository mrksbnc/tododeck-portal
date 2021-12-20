<template>
  <LoadingCard v-if="isLoading" class="w-full h-full" />
  <div
    v-else
    class="h-full w-full bg-gradient-to-tr from-lime-500 to-emerald-500 rounded-xl flex font-bold text-white font-sans shadow-md"
  >
    <div class="h-full w-full items-center flex text-3xl pl-6">
      <span>Active todos</span>
    </div>
    <div class="pr-8 pl-0 flex items-center font-sans">
      <span class="text-7xl">{{ activeTodoCount }}</span>
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
    name: 'TodoCountCard',
    setup() {
      const isLoading = ref(false);
      const activeTodoCount = ref(0);

      const userId = computed(() => store.getters[USER_STORE.GETTERS.GET_USER_ID]);

      const getTodoCount = async () => {
        isLoading.value = true;
        try {
          const count = await apiService.getTodoCount(userId.value);
          activeTodoCount.value = count;
        } catch (error) {
          notificationFunctions.errorAlert({
            title: 'Something went wrong!',
            text: "Todo count couldn't be fetched from server",
          });
        } finally {
          isLoading.value = false;
        }
      };

      onMounted(async () => {
        await getTodoCount();
      });

      return { isLoading, activeTodoCount };
    },
  });
</script>
