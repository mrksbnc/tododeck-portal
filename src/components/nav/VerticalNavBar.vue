<template>
  <div class="w-60 h-full pt-1 pb-1 pr-1">
    <div class="bg-cyan-900 flex flex-col w-full h-full text-white items-center rounded-xl">
      <div class="h-1/6 py-3 w-full rounded-tr-lg text-center mt-4 mb-5">
        <span class="font-bold text-lg mb-2">Welcome</span><br />
        <span class="text-sky-400 font-semibold">Sarah Dayan</span>
      </div>
      <div
        class="h-3/6 w-full flex rounded-tr-lg text-center mx-auto content-center justify-center"
      >
        <ul class="list-none text-left">
          <li
            v-for="(menu, id) in featureMenu"
            :key="id"
            class="block cursor-pointer hover:text-cyan-200 py-4 text-lg pr-2"
            @click="clickEventHandler(menu.id, menu.module)"
          >
            <i :class="menu.icon" />
            <span class="pl-5 font-semibold font-sans"> {{ menu.name }} </span>
          </li>
        </ul>
      </div>
      <div class="h-2/6 w-full flex flex-col items-center rounded-br-lg">
        <div class="h-full w-full flex flex-col items-center content-center">
          <div class="h-full w-full flex flex-col my-5 cursor-pointer items-center justify-end">
            <ul class="list-none text-left">
              <li
                v-for="(menu, id) in systemMenu"
                :key="id"
                :class="[
                  menu.id === systemMenuIds.SIGN_OUT
                    ? 'hover:text-red-400 '
                    : 'hover:text-cyan-200 ',
                  'block cursor-pointer pt-3 text-lg',
                ]"
                @click="clickEventHandler(menu.id, menu.module)"
              >
                <i :class="menu.icon" />
                <span class="pl-5"> {{ menu.name }} </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import router from '@/router';
  import { MenuModul } from '@/types/menu';
  import { deleteToken } from '@/utils/token';
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
      const systemMenuIds = ref(SystemMenuIds);
      const systemMenu = ref(verticalMenuCollection.system);
      const featureMenu = ref(verticalMenuCollection.feature);

      const signOut = function () {
        deleteToken();
        router.push('/');
      };

      const clickEventHandler = function (id: number, module: MenuModul) {
        if (module === MenuModuls.SYSTEM && id === SystemMenuIds.SIGN_OUT) {
          signOut();
          return;
        }
        emit('changeMenuView', { id });
      };

      return { systemMenuIds, systemMenu, featureMenu, clickEventHandler };
    },
  });
</script>
