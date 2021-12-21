<template>
  <BaseModal name="CreateProjectModal" class="w-4/6 h-4/6">
    <template #modal__header>
      <h1 class="text-lg text-gray-700">Create Project</h1>
    </template>
    <template #body> </template>
    <template #footer> </template>
  </BaseModal>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';

  export default defineComponent({
    name: 'ProjectModal',
  });
</script>

<style></style>
