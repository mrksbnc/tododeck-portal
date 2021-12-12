<template>
  <ToasterContainer ref="v-toast-container" />
  <router-view ref="layout" v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
  <ModalContainer ref="v-modal-container" />
</template>

<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';

  export default defineComponent({
    name: 'App',
  });
</script>
