<template>
  <transition name="ease-out-modal" leave-active-class="duration-300">
    <div
      v-if="visible"
      :key="id"
      :class="[
        { 'h-16': messageLength < 80, 'h-18': messageLength > 80 },
        'flex pointer-events-auto relative w-full max-w-sm mx-auto overflow-hidden right-0 bg-white my-1 rounded-lg shadow-md dark:bg-gray-800 top-0 z-50 toaster cursor-pointer',
      ]"
      @mouseover="pauseToastHide()"
      @mouseout="resumeToastHide()"
    >
      <span
        class="absolute flex text-gray-500 h-full right-0 pr-2 ml-2 cursor-pointer hover:text-red-500 p-1 hover:bg-gray-500"
        @click="hideToast()"
      >
        <i class="fas fa-times text-xs self-center" />
      </span>

      <div v-if="success" class="flex items-center justify-center w-12 bg-green-500">
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
      <div v-if="info" class="flex items-center justify-center w-12 bg-blue-500">
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
      <div v-if="warning" class="flex items-center justify-center w-12 bg-yellow-400">
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
      <div v-if="error" class="flex items-center justify-center w-12 bg-red-600">
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
      <div class="px-4 py-3">
        <div class="mb-2 w-7/8">
          <span :class="titleColor" class="font-semibold">{{ title }}</span>
          <p class="text-xs text-gray-600 dark:text-gray-200 text-left">
            {{ processedMessage }}
          </p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
  import {
    ref,
    computed,
    nextTick,
    onMounted,
    onUnmounted,
    defineComponent,
  } from '@vue/runtime-core';
  import store from '@/store';
  import Timer from '@/utils/timer';
  import ToastVariants from '@/data/enums/toastVariants';
  import { TOAST_STORE } from '@/data/constants/vuexConstants';

  export default defineComponent({
    name: 'BaseToast',
    props: {
      id: {
        type: Number,
        required: true,
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
        type: String,
        default: ToastVariants.INFO,
      },
      delay: {
        type: Number,
        default: 2500,
      },
    },
    setup(props) {
      const timer = ref(new Timer(() => {}, 0));
      const visible = ref(true);

      const success = computed(() => {
        return props.variant === ToastVariants.SUCCESS;
      });

      const info = computed(() => {
        return props.variant === ToastVariants.INFO;
      });

      const warning = computed(() => {
        return props.variant === ToastVariants.WARNING;
      });

      const error = computed(() => {
        return props.variant === ToastVariants.ERROR;
      });

      const isVisible = computed(() => {
        return visible.value;
      });

      const titleColor = computed(() => {
        switch (props.variant) {
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
      });

      const messageLength = computed(() => {
        return props.text.length;
      });

      const processedMessage = computed(() => {
        let result: string[] = [];
        props.text.split('').forEach((e, i) => {
          if (i % 70 == 0) result.push('\r\n');
          result.push(e);
        });
        return result.join('');
      });

      const triggerToast = () => {
        timer.value = new Timer(() => {
          hideToast();
        }, props.delay);
      };

      const hideToast = () => {
        visible.value = false;
        store.dispatch(TOAST_STORE.ACTIONS.REMOVE_TOAST, props.id);
      };

      const pauseToastHide = () => {
        timer.value.pause();
      };

      const resumeToastHide = () => {
        timer.value.resume();
      };

      onMounted(() => {
        nextTick(() => {
          triggerToast();
        });
      });

      onUnmounted(() => {
        nextTick(() => {
          hideToast();
        });
      });

      return {
        visible,
        info,
        success,
        warning,
        error,
        isVisible,
        titleColor,
        messageLength,
        processedMessage,
        triggerToast,
        hideToast,
        pauseToastHide,
        resumeToastHide,
      };
    },
  });
</script>
