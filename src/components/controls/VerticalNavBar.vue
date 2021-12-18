<template>
  <div
    class="bg-slate-300 flex flex-col w-60 h-full text-gray-500 items-center rounded-tr-xl rounded-br-xl"
  >
    <div class="h-1/6 w-full rounded-tr-lg text-center pt-4">
      <span class="text-mono text-gray-800 font-bold text-lg"> .tododeck </span>
    </div>
    <div class="h-3/6 w-full flex rounded-tr-lg text-center justify-center">
      <ul class="list-none text-left">
        <li
          v-for="(menu, id) in featureMenu"
          :key="id"
          class="block cursor-pointer hover:text-gray-800 pt-3 pb-3"
          @click="clickEventHandler(menu.id, menu.module)"
        >
          <i :class="menu.icon" />
          <span class="ml-3"> {{ menu.name }} </span>
        </li>
      </ul>
    </div>
    <div class="h-2/6 w-full h-full flex flex-col items-center rounded-br-lg">
      <div class="h-full w-full flex flex-col items-center content-center">
        <div class="h-full w-full flex flex-col my-4 cursor-pointer items-center justify-end">
          <ul class="list-none text-left">
            <li
              v-for="(menu, id) in systemMenu"
              :key="id"
              class="block cursor-pointer hover:text-gray-800 pt-3"
              @click="clickEventHandler(menu.id, menu.module)"
            >
              <i :class="menu.icon" />
              <span class="ml-3"> {{ menu.name }} </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import router from '@/router';
  import { MenuModul } from '@/types/menu';
  import { deleteToken } from '../../utils/token';
  import MenuModuls from '@/data/enums/menuModules';
  import emitCollection from '@/data/emitCollection';
  import SystemMenuIds from '@/data/enums/systemMenuIds';
  import { defineComponent, ref } from '@vue/runtime-core';
  import verticalMenuCollection from '@/data/collections/verticalMenuCollection';

  export default defineComponent({
    name: 'VerticalNavBar',
    emits: {
      changeMenuView: emitCollection.changeMenuView,
    },
    setup(props, { emit }) {
      const systemMenu = ref(verticalMenuCollection.system);
      const featureMenu = ref(verticalMenuCollection.feature);

      function signOut() {
        deleteToken();
        router.push('/');
      }

      function clickEventHandler(id: number, module: MenuModul) {
        if (module === MenuModuls.SYSTEM && id === SystemMenuIds.SIGN_OUT) {
          signOut();
          return;
        }
        emit('changeMenuView', { id });
      }

      return { systemMenu, featureMenu, clickEventHandler };
    },
  });
</script>
