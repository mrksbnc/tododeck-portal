<template>
  <div class="h-full w-full">
    <div class="flex w-full h-1/5">
      <div class="w-1/3 p-1">
        <DueTodayCard class="w-full h-full" />
      </div>
      <div class="w-1/3 p-1">
        <LoadingCard />
      </div>
      <div class="w-1/3 p-1">
        <LoadingCard />
      </div>
    </div>
    <div class="w-full h-4/5 flex flex-row">
      <div class="w-1/2 h-full p-1">
        <LoadingCard class="w-full" />
      </div>
      <div class="w-1/2 h-full p-1">
        <LoadingCard class="w-full" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from '@vue/runtime-core';

  export default defineComponent({
    name: 'HomeView',

    methods: {
      test() {
        console.log(' a kurva anyad');
      },
    },
  });
</script>

<style></style>
