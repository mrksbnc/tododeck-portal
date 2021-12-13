<template>
  <div class="flex justify-center items-center">
    <div class="animate-spin rounded-full h-9 w-9 border-b-2 border-indigo-500"></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';

  export default defineComponent({
    name: 'BaseSpinner',
  });
</script>
