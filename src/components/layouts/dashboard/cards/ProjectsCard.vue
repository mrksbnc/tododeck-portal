<template>
  <LoadingCard v-if="isLoading" class="w-full h-full" />
  <div
    v-else
    class="h-full w-full flex text-white bg-gray-200 rounded-xl font-bold font-sans shadow-md"
  ></div>
</template>

<script>
  import { defineComponent, ref } from '@vue/runtime-core';

  export default defineComponent({
    name: 'ProjectsCard',
    setup() {
      const isLoading = ref(false);

      return { isLoading };
    },
  });
</script>

<style></style>
