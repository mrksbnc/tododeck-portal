<template>
  <label class="text-base font-light font-mono text-white"> Already have an account?</label>
  <span
    class="cursor-pointer hover:text-teal-300 text-lg w-1/3 font-semibold text-white font-mono"
    @click="changeActiveComponent()"
  >
    Sign in
  </span>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';

  export default defineComponent({
    name: 'LoginMessage',
    emits: ['changeComponent'],
    setup(props, { emit }) {
      const changeActiveComponent = () => {
        emit('changeComponent');
      };

      return { changeActiveComponent };
    },
  });
</script>
