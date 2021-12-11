<template>
  <div class="flex absolute flex-col h-screen-max w-2/5 right-0">
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
  import { TOAST_STORE } from '@/data/constants/vuexConstants';
  import { computed, defineComponent } from '@vue/runtime-core';

  export default defineComponent({
    name: 'ToasterContainer',
    setup() {
      const store = useStore();

      const toastStack = computed(() => store.getters[TOAST_STORE.GETTERS.GET_TOASTS]);
      return { toastStack };
    },
  });
</script>
