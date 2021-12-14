<template>
  <div
    class="bg-slate-200 flex flex-col w-full h-full text-white flex items-center rounded-tr-xl rounded-br-xl"
  >
    <div class="h-1/6 w-full rounded-tr-lg text-center pt-4">
      <span class="text-mono text-gray-800 font-bold text-lg"> .tododeck </span>
    </div>
    <div class="h-3/6 w-full rounded-tr-lg text-center pt-4">
      <div class="w-full text-gray-500 d-flex my-2">
        <div
          class="h-full w-full my-4 cursor-pointer flex flex-col items-center justify-center hover:text-gray-800"
        >
          <i class="fas fa-home mr-2" />
          <span class="my-2 w-full"> Overview </span>
        </div>
        <div
          class="h-full w-full my-4 cursor-pointer flex flex-col items-center justify-center hover:text-gray-800"
        >
          <i class="fas fa-chart-pie mr-2" />
          <span class="my-2 w-full"> Statistics </span>
        </div>
        <div
          class="h-full w-full my-4 cursor-pointer flex flex-col items-center justify-center hover:text-gray-800"
        >
          <i class="fas fa-folder-open mr-2" />
          <span class="my-2 w-full"> Collections </span>
        </div>
        <div
          class="h-full w-full my-4 cursor-pointer flex flex-col items-center justify-center hover:text-gray-800"
        >
          <i class="far fa-calendar-alt mr-2" />
          <span class="my-2 w-full"> Calendar </span>
        </div>
      </div>
    </div>
    <div class="h-2/6 w-full h-full flex flex-col items-center rounded-br-lg">
      <div class="h-full w-full flex flex-col items-center content-center">
        <div class="h-full w-full flex flex-col my-4 cursor-pointer items-center justify-end">
          <div class="text-gray-500 my-2 hover:text-gray-800">
            <i class="fa fa-cog mr-2" />
            <span class="w-full"> Settings </span>
          </div>
          <div class="text-gray-500 my-2 hover:text-gray-800" @click="logout()">
            <i class="fas fa-sign-out-alt mr-2" />
            <span class="w-full"> Logout </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import router from '@/router';
  import { deleteToken } from '../../utils/token';
  import { defineComponent } from '@vue/runtime-core';

  export default defineComponent({
    name: 'VerticalNavBar',
    emits: ['changeMenu'],
    setup(props, { emit }) {
      function overview() {
        emit('changeMenu');
      }

      function statistics() {
        //
      }

      function collections() {
        //
      }

      function calendar() {}

      function logout() {
        deleteToken();
        router.push('/');
      }

      return { logout };
    },
  });
</script>
