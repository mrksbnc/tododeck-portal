<template>
  <div v-if="visible" ref="modalBackdrop" class="absolute inset-0 opacity-25 z-40 bg-black" />
  <transition name="fade">
    <div
      v-if="visible"
      ref="baseModal"
      class="modal fixed inset-0 z-40 overflow-x-hidden overflow-y-auto flex"
    >
      <div class="modal_dialog relative max-w-screen-sm bg-white rounded-lg m-auto flex flex-col">
        <div class="modal_header flex items-start justify-between py-5 pl-5 mr-10">
          <slot name="header" />
          <span
            class="absolute text-gray-500 right-2 top-1 mr-2 cursor-pointer hover:text-black"
            @click="closeModal()"
          >
            <i class="fas fa-times text-xs" />
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
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'BaseModal',
    props: {
      id: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
    data: () => {
      return {
        visible: true,
      };
    },
    methods: {
      closeModal() {
        this.visible = false;
      },
    },
  });
</script>
