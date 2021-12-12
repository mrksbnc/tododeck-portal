<template>
  <ToasterContainer ref="toaster-container" />
  <router-view ref="layout" v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
  <ModalContainer ref="modal-container" />
</template>

<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';

  export default defineComponent({
    name: 'App',
  });
</script>
