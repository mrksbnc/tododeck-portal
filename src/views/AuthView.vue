<template>
  <div class="w-full h-full flex justify-center items-center bg-teal-500">
    <div class="container mx-auto w-4/5 h-5/6 rounded-lg bg-white flex flex-row">
      <div
        class="flex justify-center h-full items-center w-1/2 bg-white rounded-lg bg-cover bg-liquid-marble"
      >
        <div
          class="flex flex-col w-5/6 h-5/6 p-5 rounded-xl bg-opacity-40 backdrop-filter backdrop-blur-lg"
        >
          <div class="h-full flex flex-col justify-between">
            <div class="flex flex-col">
              <div
                class="w-1/4 p-2 text-white bg-white bg-opacity-30 rounded-sm backdrop-filter backdrop-blur-lg text-center"
              >
                <label class="text-base font-bold font-mono">Tododeck</label>
              </div>
              <hr class="border-2 w-1/6 mt-2 mb-10" />
              <div class="d-flex flex-col text-white mt-7">
                <div class="m-2 text-lg font-mono font-bold">Free up your mental space</div>
                <div class="m-2 font-light font-mono">
                  Let all those tasks out of your head onto your to-do list
                </div>
              </div>
            </div>
            <div class="h-1/5 flex flex-col justify-end">
              <label class="text-base font-light font-mono text-white">
                Already have an account?
              </label>
              <p
                class="cursor-pointer hover:text-teal-300 text-lg font-semibold text-white font-mono"
                @click="changeActiveComponent()"
              >
                Sign in
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/2 h-full">
        <component :is="activeComponent" class="w-full" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import AuthComponents from '@/data/enums/authComponents';
  import { defineComponent, ref } from '@vue/runtime-core';

  export default defineComponent({
    name: 'LoginView',
    setup() {
      const activeComponent = ref(AuthComponents.SIGN_UP);

      function changeActiveComponent() {
        if (activeComponent.value === AuthComponents.SIGN_UP)
          activeComponent.value = AuthComponents.LOGIN;
        if (activeComponent.value === AuthComponents.LOGIN)
          activeComponent.value = AuthComponents.SIGN_UP;
      }

      return { activeComponent, changeActiveComponent };
    },
  });
</script>
