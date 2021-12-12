<template>
  <div class="w-full h-full flex justify-center items-center bg-teal-600">
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
              <label v-if="isSignUp" class="text-base font-light font-mono text-white">
                Already have an account?
              </label>
              <label v-else class="text-base font-light font-mono text-white">
                Not a member yet?
              </label>
              <span
                v-if="isSignUp"
                class="cursor-pointer hover:text-teal-300 text-lg w-1/3 font-semibold text-white font-mono"
                @click="changeActiveComponent()"
              >
                Sign in
              </span>
              <span
                v-else
                class="cursor-pointer hover:text-teal-300 text-lg w-1/3 font-semibold text-white font-mono"
                @click="changeActiveComponent()"
              >
                Sign up
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/2 h-full">
        <component
          :is="activeComponent"
          :key="forceRenderKey"
          class="w-full"
          @changeComponent="changeComponent"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import AuthComponents from '@/data/enums/authComponents';
  import { defineComponent, ref, computed, nextTick } from '@vue/runtime-core';

  export default defineComponent({
    name: 'LoginView',
    setup() {
      const forceRenderKey = ref(0);
      const selectedComponent = ref(AuthComponents.SIGN_UP);

      const activeComponent = computed(() => {
        return selectedComponent.value;
      });

      const isSignUp = activeComponent.value === AuthComponents.SIGN_UP;

      function changeActiveComponent() {
        if (selectedComponent.value == AuthComponents.SIGN_UP)
          selectedComponent.value = AuthComponents.LOGIN;
        else selectedComponent.value = AuthComponents.SIGN_UP;

        nextTick(() => {
          ++forceRenderKey.value;
        });
      }

      function changeComponent() {
        changeActiveComponent();
      }

      return { forceRenderKey, activeComponent, isSignUp, changeActiveComponent, changeComponent };
    },
  });
</script>
