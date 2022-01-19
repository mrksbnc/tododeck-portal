<template>
  <div
    v-if="visible"
    ref="modalBackdrop"
    class="absolute inset-0 opacity-40 z-modal-backdrop bg-black"
  />
  <transition name="fade">
    <div
      v-if="visible"
      ref="baseModal"
      v-bind="$attrs"
      class="modal fixed inset-0 z-modal overflow-x-hidden mx-auto overflow-y-auto flex"
    >
      <div
        class="modal_dialog relative max-w-screen-lg bg-white rounded-lg m-auto flex flex-col"
        v-bind="$attrs"
      >
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
  import { MODAL_STORE } from '@/data/vuex/vuexConstants';

  export default defineComponent({
    name: 'BaseModal',
    inheritAttrs: false,
    props: {
      id: {
        type: String,
        default: () => {
          return `modal__${+new Date()}_${Math.random()}`;
        },
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
