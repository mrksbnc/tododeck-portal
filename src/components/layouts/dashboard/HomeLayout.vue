<template>
  <div class="h-full w-full">
    <div class="flex w-full h-1/5">
      <div class="w-1/3 p-1">
        <DueTodayCountCard class="w-full h-full" />
      </div>
      <div class="w-1/3 p-1">
        <ProjectCountCard class="w-full h-full" />
      </div>
      <div class="w-1/3 p-1">
        <TodoCountCard class="w-full h-full" />
      </div>
    </div>
    <div class="w-full h-4/5 flex flex-row">
      <div class="w-1/2 h-full p-1">
        <ProjectsCard class="w-full h-full" />
      </div>
      <div class="w-1/2 h-full p-1">
        <LoadingCard class="w-full" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';

  export default defineComponent({
    name: 'HomeLayout',
  });
</script>

<style></style>
