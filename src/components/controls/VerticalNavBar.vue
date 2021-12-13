<template>
  <div
    class="bg-slate-200 flex flex-col w-full h-full text-white flex items-center rounded-tr-lg rounded-br-lg"
  >
    <div class="h-1/6 w-full rounded-tr-lg text-center pt-4">
      <span class="text-lg text-mono text-gray-800 font-bold"> .tododeck </span>
    </div>
    <div class="h-3/6 w-full flex flex-col items-center">
      <div class="flex flex-col items-center content-center">
        <div class="h-full w-full ml-3 my-4 cursor-pointer flex flex-col content-center">
          <div v-for="menu in navBarMenuElements" :key="menu.id" class="text-gray-500 d-flex my-2">
            <i :class="[menu.icon, 'mr-2']" />
            <span class="hover:text-gray-800 my-2 w-full">
              {{ menu.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="h-2/6 w-full h-full flex flex-col items-center rounded-br-lg">
      <div class="h-full w-full flex flex-col items-center content-center">
        <div
          class="my-4 cursor-pointer h-full flex flex-col h-full w-full ml-3 items-center justify-end"
        >
          <div v-for="menu in systemMenuElements" :key="menu.id" class="text-gray-500 d-flex my-2">
            <i :class="[menu.icon, 'mr-2']" />
            <span class="hover:text-gray-800 my-2 w-full">
              {{ menu.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from '@vue/runtime-core';
  import { menuCollection } from '@/data/constants/menuCollection';
  import { systemMenuCollection } from '@/data/constants/systemMenuCollection';

  export default defineComponent({
    name: 'VerticalNavBar',
    setup(props) {
      const navBarMenuElements = ref(menuCollection);
      const systemMenuElements = ref(systemMenuCollection);

      const isActive = ref(Number(navBarMenuElements.value[0]?.id) || undefined);

      return { navBarMenuElements, systemMenuElements, isActive };
    },
  });
</script>
