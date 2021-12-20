<template>
  <transition name="ease-out-overlay">
    <div v-if="visible" ref="modalBackdrop" class="absolute inset-0 opacity-25 z-40 bg-black" />
  </transition>
  <transition name="ease-out-modal">
    <div
      v-if="visible"
      ref="baseModal"
      class="v-base-modal fixed inset-0 z-modal overflow-x-hidden overflow-y-auto flex"
    >
      <div class="modal_dialog relative max-w-screen-sm bg-white rounded-lg m-auto flex flex-col">
        <div class="v-modal-header items-start justify-between py-5 pl-5 mr-10">
          <slot name="v-modal-header " />
          <span
            class="absolute text-gray-500 right-2 top-1 mr-2 cursor-pointer hover:text-black"
            @click="closeModal()"
          >
            <i class="fas fa-times text-xs" />
          </span>
        </div>
        <div class="overflow-auto v-modal-body flex flex-col items-stretch px-5">
          <slot name="v-modal-body" />
        </div>
        <div class="v-modal-footer py-5 px-5">
          <slot name="v-modal-footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    name: 'BaseModal',
    props: {
      id: {
        type: String,
        default: () => {
          return `modal_${+new Date()}_${Math.random()}`;
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
        visible.value = false;
      };

      return { visible, closeModal };
    },
  });
</script>
