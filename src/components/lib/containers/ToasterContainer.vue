<template>
  <div
    ref="v-toast-container"
    class="container bg-transparent h-full w-full flex-col inset-0 p-4 overflow-hidden max-w-sm pointer-events-none float-right"
  >
    <Toast
      v-for="(item, index) in toastStack"
      :id="item.id"
      :key="index"
      :text="item.text"
      :title="item.title"
      :variant="item.variant"
    />
  </div>
</template>

<script lang="ts">
  import { useStore } from 'vuex';
  import { ToastPropModel } from '@/types/vuex/models';
  import { TOAST_STORE } from '@/data/vuex/vuexConstants';
  import { computed, ComputedRef, defineComponent } from '@vue/runtime-core';

  export default defineComponent({
    name: 'ToasterContainer',
    setup() {
      const store = useStore();

      const toastStack: ComputedRef<Array<ToastPropModel>> = computed(
        () => store.getters[TOAST_STORE.GETTERS.GET_TOASTS]
      );
      return { toastStack };
    },
  });
</script>
