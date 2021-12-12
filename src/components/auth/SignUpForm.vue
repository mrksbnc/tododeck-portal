<template>
  <div class="h-full w-full flex flex-col items-center content-center mt-20">
    <div class="w-4/5 flex flex-col justify-around">
      <div class="mb-5 text-center text-4xl">
        <i class="fas fa-user-plus mb-2"></i>
        <p class="font-sans">Sign up</p>
      </div>
      <div>
        <BaseInput class="my-3" placeholder="First name" :bordered="false" />
        <BaseInput class="my-3" placeholder="Last name" :bordered="false" />
        <BaseInput class="my-3" placeholder="Password" :bordered="false" />
        <BaseInput class="my-3" placeholder="Password again" :bordered="false" />
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
    name: 'SignUpForm',
    setup() {
      const isLoading = ref(false);

      function click() {
        isLoading.value = !isLoading.value;
      }
      return { isLoading, click };
    },
  });
</script>
