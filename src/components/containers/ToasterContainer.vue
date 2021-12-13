<template>
  <div
    ref="v-toast-container"
    class="container fixed inline-block flex-col inset-0 p-4 overflow-hidden max-w-sm pointer-events-none z-toast"
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
  import { ToastPropModel } from '@/types/interfaces/models';
  import { TOAST_STORE } from '@/data/constants/vuexConstants';
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
