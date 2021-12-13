<template>
  <div class="w-full h-full flex justify-center items-center bg-teal-600">
    <VerticalNavBar
      class="w-1/5"
      :menuElements="[
        { id: 1, menuName: 'menuName', componentName: 'alma' },
        { id: 2, menuName: 'menuName', componentName: 'alma' },
        { id: 3, menuName: 'menuName', componentName: 'alma' },
      ]"
    />
    <div class="w-1/4 bg-green-400"></div>
    <div class="w-3/4 bg-black"></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';

  export default defineComponent({
    name: 'DashboardView',
  });
</script>

<style></style>
