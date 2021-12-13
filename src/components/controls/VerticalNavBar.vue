<template>
  <div class="flex flex-col items-center text-center bg-blue-400 h-full">
    <div class="bg-white w-full h-24 max-h-24 text-white flex items-center">
      <div class="flex items-center w-full">
        <img
          class="w-10 h-10 rounded-full mr-4"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          alt="Avatar of Jonathan Reinink"
        />
        <div class="text-sm">
          <p class="text-gray-900 leading-none">Jonathan Reinink</p>
          <p class="text-gray-600">Aug 18</p>
        </div>
      </div>
    </div>
    <div v-for="item in menuElements" :key="item.id" class="my-4 cursor-pointer">
      <span class="text-blue-500 hover:text-blue-800" href="#">{{ item.menuName }}</span>
    </div>
  </div>
</template>

<script lang="ts">
  import { NavBarMenuElement } from '@/types/navbar';
  import { defineComponent, ref } from '@vue/runtime-core';

  export default defineComponent({
    name: 'VerticalNavBar',
    props: {
      menuElements: {
        required: true,
        type: Array as () => NavBarMenuElement[],
      },
    },
    setup(props) {
      const isActive = ref(Number(props?.menuElements[0]?.id) || undefined);
    },
  });
</script>
