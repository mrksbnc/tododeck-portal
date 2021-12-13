<template>
  <label class="text-base font-light font-mono text-white"> Not a member yet? </label>
  <span
    class="cursor-pointer hover:text-teal-300 text-lg w-1/3 font-semibold text-white font-mono"
    @click="changeActiveComponent()"
  >
    Sign up
  </span>
</template>

<script>
  import { defineComponent } from '@vue/runtime-core';

  export default defineComponent({
    name: 'SignUpMessage',
    emits: ['changeComponent'],
    setup(props, { emit }) {
      const changeActiveComponent = () => {
        emit('changeComponent');
      };

      return { changeActiveComponent };
    },
  });
</script>
