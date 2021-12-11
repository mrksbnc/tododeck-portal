<template>
  <component v-for="modal in modalStack" :key="modal.id" :is="modal.name" />
</template>

<script lang="ts">
  import { useStore } from 'vuex';
  import { MODAL_STORE } from '@/data/constants/vuexConstants';
  import { computed, defineComponent } from '@vue/runtime-core';

  export default defineComponent({
    name: 'ModalContainer',
    setup() {
      const store = useStore();

      const modalStack = computed(() => store.getters[MODAL_STORE.GETTERS.GET_MODALS]);
      return { modalStack };
    },
  });
</script>
