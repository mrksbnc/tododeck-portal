<template>
  <div
    ref="v-toast-container"
    class="fixed flex flex-col inset-0 p-4 overflow-hidden z-toast max-w-sm"
  >
    <Toast
      v-for="(item, index) in toastStack"
      id="item.id"
      :key="index"
      :text="item.text"
      :title="item.title"
      :variant="item.variant"
    />
  </div>
</template>

<script lang="ts">
  import { useStore } from 'vuex';
  import { computed, defineComponent } from '@vue/runtime-core';
  import { TOAST_STORE } from '@/data/constants/vuexConstants';

  export default defineComponent({
    name: 'ToasterContainer',
    setup() {
      const store = useStore();

      const toastStack = computed(() => store.getters[TOAST_STORE.GETTERS.GET_TOASTS]);
      return { toastStack };
    },
  });
</script>
