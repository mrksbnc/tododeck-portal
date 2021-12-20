<template>
  <div class="w-full h-full flex justify-center items-center bg-teal-600">
    <div class="container mx-auto w-4/5 h-5/6 rounded-lg bg-white flex flex-row">
      <div
        class="flex justify-center h-full items-center w-1/2 bg-white rounded-lg bg-cover bg-liquid-marble sm:hidden md:flex"
      >
        <div
          class="flex flex-col w-5/6 h-5/6 p-5 rounded-xl bg-opacity-40 backdrop-filter backdrop-blur-lg"
        >
          <div class="h-full flex flex-col justify-between">
            <div class="flex flex-col">
              <div
                class="w-1/4 p-2 text-white bg-white bg-opacity-30 rounded-sm backdrop-filter backdrop-blur-lg text-center"
              >
                <span class="text-lg text-mono font-bold font-mono">tododeck</span>
              </div>
              <hr class="border-2 w-1/6 mt-2 mb-10 bg-white" />
              <div class="d-flex flex-col text-white mt-7">
                <div class="m-2 text-lg font-mono font-bold">Free up your mental space</div>
                <div class="m-2 font-light font-mono">
                  Let all those tasks out of your head onto your to-do list
                </div>
              </div>
            </div>
            <div class="h-1/5 flex flex-col justify-end">
              <component
                :is="activeMessageComponent"
                :key="forceRenderKey"
                @changeComponent="changeComponent"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="h-full sm:w-full md:w-1/2">
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
    name: 'LandingPageView',
    setup() {
      const forceRenderKey = ref(0);
      const selectedComponent = ref(AuthComponents.LOGIN);

      const activeComponent = computed(() => {
        return selectedComponent.value;
      });

      const activeMessageComponent = computed(() => {
        return selectedComponent.value === AuthComponents.LOGIN ? 'SignUpMessage' : 'LoginMessage';
      });

      const changeActiveComponent = () => {
        if (selectedComponent.value == AuthComponents.LOGIN)
          selectedComponent.value = AuthComponents.SIGN_UP;
        else selectedComponent.value = AuthComponents.LOGIN;

        nextTick(() => {
          ++forceRenderKey.value;
        });
      };

      const changeComponent = () => {
        changeActiveComponent();
      };

      return {
        forceRenderKey,
        activeComponent,
        activeMessageComponent,
        changeComponent,
      };
    },
  });
</script>
