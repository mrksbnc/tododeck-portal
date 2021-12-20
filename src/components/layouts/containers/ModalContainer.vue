<template>
  <component :is="modal.name" v-if="modal" :id="modal.id" />
</template>

<script lang="ts">
  import { useStore } from 'vuex';
  import { ModalPropModel } from '@/types/models';
  import { MODAL_STORE } from '@/data/constants/vuexConstants';
  import { computed, ComputedRef, defineComponent } from '@vue/runtime-core';

  export default defineComponent({
    name: 'ModalContainer',
    setup() {
      const store = useStore();

      const modal: ComputedRef<ModalPropModel> = computed(
        () => store.getters[MODAL_STORE.GETTERS.GET_MODAL]
      );

      return { modal };
    },
    watch: {
      modal: function (val) {},
    },
  });
</script>
