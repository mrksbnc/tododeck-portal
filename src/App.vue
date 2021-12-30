<template>
  <ToasterContainer ref="toast__container" />
  <router-view ref="router__view" v-slot="{ Component }" class="absolute">
    <component :is="Component" />
  </router-view>
  <ModalContainer ref="modal__container" />
</template>

<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';

  export default defineComponent({
    name: 'App',
  });
</script>
