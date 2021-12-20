<template>
  <div :class="{ 'animate-pulse': isLoading }" class="bg-gray-300 rounded-xl h-full w-full">
    <slot name="card-content" @setLoading="setLoading()"></slot>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from '@vue/runtime-core';

  export default defineComponent({
    name: 'LoadingCard',
    setup() {
      const isLoading = ref(false);

      function setLoading() {
        isLoading.value = !isLoading.value;
      }

      return { isLoading, setLoading };
    },
  });
</script>
