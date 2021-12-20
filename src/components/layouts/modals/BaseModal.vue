<template>
  <div
    v-if="visible"
    ref="modalBackdrop"
    class="absolute inset-0 opacity-25 z-modal-backdrop bg-black"
  ></div>
  <transition name="fade">
    <div
      v-if="visible"
      ref="baseModal"
      class="modal fixed inset-0 z-modal overflow-x-hidden overflow-y-auto flex"
    >
      <div class="modal_dialog relative max-w-screen-sm bg-white rounded-lg m-auto flex flex-col">
        <div class="modal_header flex items-start justify-between py-5 pl-5 mr-10">
          <slot name="header" />
          <span
            class="absolute text-gray-500 right-2 top-1 mr-2 cursor-pointer hover:text-black"
            @click="closeModal()"
          >
            <i class="fas fa-times text-xs"></i>
          </span>
        </div>
        <div class="modal_body overflow-auto flex flex-col items-stretch px-5">
          <slot name="body" />
        </div>
        <div class="modal_footer py-5 px-5">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
  import store from '@/store';
  import { defineComponent, ref, nextTick } from 'vue';
  import { MODAL_STORE } from '@/data/constants/vuexConstants';

  export default defineComponent({
    name: 'BaseModal',
    props: {
      id: {
        type: String,
        default: () => {
          return `input_${+new Date()}_${Math.random()}`;
        },
      },
      name: {
        type: String,
        required: true,
      },
    },
    setup() {
      const visible = ref(true);

      const closeModal = () => {
        nextTick(() => {
          visible.value = false;
          store.dispatch(MODAL_STORE.ACTIONS.CLOSE_MODAL);
        });
      };

      return { visible, closeModal };
    },
  });
</script>
