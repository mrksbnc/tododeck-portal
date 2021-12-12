<template>
  <div class="h-full w-full flex flex-col items-center content-centerflex justify-center">
    <div class="w-4/5 flex flex-col items-center">
      <div class="mb-5 text-center text-4xl">
        <i class="fas fa-lock mb-2"></i>
        <p class="font-sans">Sign in</p>
      </div>
      <div class="w-3/4 flex flex-col items-center">
        <BaseInput class="my-2" placeholder="First name" :bordered="true" />
        <BaseInput class="my-2" placeholder="Last name" :bordered="true" />
      </div>
      <div class="text-center mt-10">
        <button
          v-if="!isLoading"
          class="bg-indigo-500 hover:bg-teal-600 text-white font-sans py-2 px-3 rounded-full text-center items-center"
          @click="click"
        >
          <i class="fas fa-check"> </i>
          <span class="animate-spin white"></span>
        </button>
        <BaseSpinner v-else />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from '@vue/runtime-core';

  export default defineComponent({
    name: 'LoginForm',
    setup() {
      const isLoading = ref(false);

      function click() {
        isLoading.value = !isLoading.value;
      }
      return { isLoading, click };
    },
  });
</script>

<style></style>
