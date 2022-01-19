<template>
  <div class="">
    <label v-if="label" class="block mb-1 font-semibold text-xs text-gray-700" :for="id">
      {{ label }}
    </label>
    <textarea
      :id="id"
      ref="input"
      rows="3"
      :type="type"
      v-bind="$attrs"
      :value="modelValue"
      :disabled="disabled"
      :placeholder="placeholder"
      :class="[{ 'border border-red-500': hasError }, cssClasses]"
      class="block p-2 w-full text-gray-800 font-sans rounded text-left appearance-none outline-none placeholder-gray-400 resize-none"
    />
    <div v-show="error" class="text-red-600 mt-1 text-xs">
      {{ error }}
    </div>
  </div>
</template>

<script lang="ts">
  import { ComponentPublicInstance, computed, defineComponent, ref } from '@vue/runtime-core';

  export default defineComponent({
    name: 'BaseTextarea',
    inheritAttrs: false,
    props: {
      id: {
        type: String,
        default: () => {
          return `input_${+new Date()}_${Math.random()}`;
        },
      },
      type: {
        type: String,
        default: 'text',
      },
      modelValue: {
        type: String,
        default: '',
      },
      label: {
        type: String,
        default: '',
      },
      placeholder: {
        type: String,
        default: '',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      bordered: {
        type: Boolean,
        default: true,
      },
      error: {
        type: String,
        default: '',
      },
      hasError: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
      const input = ref<ComponentPublicInstance<HTMLInputElement>>();

      const cssClasses = computed(() => {
        return {
          'border border-gray-300 focus:border-gray-700':
            props.bordered === true && !props.hasError,
          'border bg-gray-200 focus:bg-white focus:border-gray-600':
            props.bordered === false && !props.hasError,
        };
      });

      const updateInput = (e: Event): void => {
        const target = e.target as HTMLInputElement;
        emit('update:modelValue', target.value);
      };

      return {
        input,
        cssClasses,
        updateInput,
      };
    },
  });
</script>
