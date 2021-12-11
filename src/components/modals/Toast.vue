<template>
  <transition name="fade">
    <div
      :key="id"
      v-if="visible"
      class="flex h-16 mt-1 mr-2 mb-1 my-5 z-50 top-0 w-full toaster right-0 mx-auto bg-white relative max-w-sm rounded-lg shadow-md cursor-pointer overflow-hidden dark:bg-gray-800"
    >
      <span
        class="absolute text-gray-500 right-1 top-1 mr-2 cursor-pointer hover:text-black"
        @click="hideToast()"
      >
        <i class="fas fa-times text-xs"></i>
      </span>
      <div class="flex items-center justify-center w-12 bg-green-500" v-if="success">
        <svg
          class="w-6 h-6 text-white fill-current"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"
          />
        </svg>
      </div>
      <div class="flex items-center justify-center w-12 bg-blue-500" v-if="info">
        <svg
          class="w-6 h-6 text-white fill-current"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"
          />
        </svg>
      </div>
      <div class="flex items-center justify-center w-12 bg-yellow-400" v-if="warning">
        <svg
          class="w-6 h-6 text-white fill-current"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"
          />
        </svg>
      </div>
      <div class="flex items-center justify-center w-12 bg-red-600" v-if="error">
        <svg
          class="w-6 h-6 text-white fill-current"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"
          />
        </svg>
      </div>
      <div class="px-4 py-3 -mx-3">
        <div class="mx-3">
          <span :class="titleColor" class="font-semibold">{{ title }}</span>
          <p class="text-sm text-gray-600 dark:text-gray-200">{{ text }}</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
  import store from '@/store';
  import Timer from '@/utils/timer';
  import { defineComponent } from '@vue/runtime-core';
  import ToastVariants from '@/data/enums/toastVariants';
  import { TOAST_STORE } from '@/data/constants/vuexConstants';

  export default defineComponent({
    name: 'Toast',
    data: () => {
      return {
        timeR: null,
        visible: true,
      };
    },
    mounted() {
      this.triggerToast();
    },
    methods: {
      triggerToast(): void {
        new Timer(() => {
          this.hideToast();
        }, this.delay);
      },
      hideToast(): void {
        this.visible = false;
        store.dispatch(TOAST_STORE.ACTIONS.REMOVE_TOAST, this.id);
      },
    },
    computed: {
      success: function (): boolean {
        return this.variant == ToastVariants.SUCCESS;
      },
      info: function (): boolean {
        return this.variant == ToastVariants.INFO;
      },
      warning: function (): boolean {
        return this.variant == ToastVariants.WARNING;
      },
      error: function (): boolean {
        return this.variant == ToastVariants.ERROR;
      },
      currentState: function (): ToastVariants {
        let state = ToastVariants.INFO;
        if (this.info) state = ToastVariants.INFO;
        if (this.error) state = ToastVariants.ERROR;
        if (this.success) state = ToastVariants.SUCCESS;
        if (this.warning) state = ToastVariants.WARNING;
        return state;
      },
      isVisible: function (): boolean {
        return this.visible;
      },
      titleColor: function (): string {
        switch (this.currentState) {
          case ToastVariants.SUCCESS:
            return 'text-green-500 dark:text-green-400';
          case ToastVariants.INFO:
            return 'text-blue-500 dark:text-blue-400';
          case ToastVariants.WARNING:
            return 'text-yellow-400 dark:text-yellow-300';
          case ToastVariants.ERROR:
            return 'text-red-500 dark:text-red-400';
          default:
            return 'text-blue-500 dark:text-blue-400';
        }
      },
    },
    props: {
      id: {
        type: Number,
      },
      title: {
        type: String,
        default: 'Title',
      },
      text: {
        type: String,
        default: 'text',
      },
      variant: {
        default: ToastVariants.INFO,
      },
      delay: {
        type: Number,
        default: 2500,
      },
    },
  });
</script>
