<template>
  <transition name="ease-out-overlay">
    <div v-if="visible" ref="modalBackdrop" class="absolute inset-0 opacity-25 z-40 bg-black" />
  </transition>
  <transition name="ease-out-modal">
    <div
      v-if="visible"
      :id="modalId"
      :key="modalId"
      ref="baseModal"
      class="fixed inset-0 z-modal overflow-x-hidden overflow-y-auto flex"
    >
      <div class="relative max-w-screen-sm bg-white rounded-lg m-auto flex flex-col">
        <div class="items-start justify-between py-5 pl-5 mr-10">
          <slot name="header " />
          <span
            class="absolute text-gray-500 right-2 top-1 mr-2 cursor-pointer hover:text-black"
            @click="closeModal()"
          >
            <i class="fas fa-times text-xs" />
          </span>
        </div>
        <div class="overflow-auto flex flex-col items-stretch px-5">
          <slot name="modal__body" />
        </div>
        <div class="py-5 px-5">
          <slot name="modal__footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
  import store from '@/store';
  import { defineComponent, ref } from 'vue';
  import { MODAL_STORE } from '@/data/constants/vuexConstants';

  export default defineComponent({
    name: 'BaseModal',
    props: {
      modalId: {
        type: String,
        default: () => {
          return `modal__${+new Date()}__${Math.random()}`;
        },
      },
    },
    setup() {
      const visible = ref(true);

      const closeModal = () => {
        visible.value = false;
        store.dispatch(MODAL_STORE.ACTIONS.CLOSE_MODAL);
      };

      return { visible, closeModal };
    },
  });
</script>
