<template>
  <LoadingCard v-if="isLoading" class="w-full h-full" />
  <div
    v-else
    class="h-full w-full bg-gradient-to-tr from-yellow-400 to-amber-500 rounded-xl flex font-bold text-white font-sans"
  >
    <div class="h-full w-full items-center flex text-3xl pl-6">
      <span>Active projects</span>
    </div>
    <div class="pr-8 pl-0 flex items-center font-sans">
      <span class="text-7xl">{{ activeProjectCount }}</span>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from '@vue/runtime-core';

  export default defineComponent({
    name: 'ProjectCountCard',
    setup() {
      const isLoading = ref(false);
      const activeProjectCount = ref(0);

      return { isLoading, activeProjectCount };
    },
  });
</script>
