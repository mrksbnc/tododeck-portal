<template>
  <div class="w-full">
    <!-- eslint-disable-next-line vue/max-attributes-per-line -->
    <label v-if="label" class="form-label block mb-1 font-semibold text-gray-700" :for="id">
      {{ label }}
    </label>
    <!--  eslint-disable-next-line vue/html-self-closing -->
    <input
      :id="id"
      ref="input"
      :type="type"
      v-bind="$attrs"
      :value="modelValue"
      :disabled="disabled"
      :class="[{ 'border-red-600': errors.length || hasError }, cssClasses]"
      class="pl-4 py-2 h-9 leading-tight block w-full text-gray-800 font-sans rounded text-left appearance-none outline-none placeholder-gray-400"
      @input="updateInput"
    />
    <!-- eslint-disable-next-line vue/max-attributes-per-line -->
    <div v-show="errors.length" class="text-red-600 mt-1 text-sm">
      {{ errors[0] }}
    </div>
  </div>
</template>

<script lang="ts">
  import { ComponentPublicInstance, computed, defineComponent, ref } from '@vue/runtime-core';

  export default defineComponent({
    name: 'FormInput',
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
      disabled: {
        type: Boolean,
        default: false,
      },
      errors: {
        type: Array,
        default: () => [],
      },
      hasError: {
        type: Boolean,
        default: false,
      },
      bordered: {
        type: Boolean,
        default: true,
      },
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
      const input = ref<ComponentPublicInstance<HTMLInputElement>>();

      const cssClasses = computed(() => {
        return {
          'border-2 border-gray-400 focus:border-gray-700': props.bordered === true,
          'border bg-gray-200 focus:bg-white focus:border-gray-600': props.bordered === false,
        };
      });

      function updateInput(e: Event): void {
        const target = e.target as HTMLInputElement;
        emit('update:modelValue', target.value);
      }

      return {
        input,
        cssClasses,
        updateInput,
      };
    },
  });
</script>
