<template>
  <LoadingCard v-if="isLoading" class="w-full h-full" />
  <div
    v-else
    class="h-full w-full bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl flex font-bold text-white font-sans"
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
  import { defineComponent, ref } from '@vue/runtime-core';

  export default defineComponent({
    name: 'DueTodayCard',
    setup() {
      const isLoading = ref(false);
      const dueTodayTaskCount = ref(0);

      return { isLoading, dueTodayTaskCount };
    },
  });
</script>

<style>
  .test {
    background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
  }
</style>
