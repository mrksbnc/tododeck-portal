<template>
  <div class="w-full h-screen-max flex flex-col">
    <div>alma</div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from '@vue/runtime-core';

  export default defineComponent({
    name: 'LoginView',
    setup() {
      const username = ref('');
      const password = ref('');
    },
  });
</script>
