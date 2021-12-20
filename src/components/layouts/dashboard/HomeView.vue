<template>
  <div class="h-full w-full">
    <div class="flex w-full h-1/5">
      <div class="w-1/3 p-2">
        <LoadingCard />
      </div>
      <div class="w-1/3 p-2">
        <LoadingCard />
      </div>
      <div class="w-1/3 p-2">
        <LoadingCard />
      </div>
    </div>
    <div class="w-full h-4/5 flex flex-row">
      <div class="w-1/2 h-full p-2">
        <LoadingCard class="w-full" />
      </div>
      <div class="w-1/2 h-full p-2">
        <LoadingCard class="w-full" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';

  export default defineComponent({
    name: 'HomeView',
  });
</script>

<style></style>
