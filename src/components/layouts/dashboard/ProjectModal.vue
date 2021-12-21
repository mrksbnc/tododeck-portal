<template>
  <BaseModal v-bind="$attrs">
    <template #header>
      <div>
        <h1 class="text-lg text-gray-700">Create Project</h1>
      </div>
    </template>
    <template #modal__body> </template>
    <template #modal__footer> </template>
  </BaseModal>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';

  export default defineComponent({
    name: 'ProjectModal',
    setup() {
      const id = `project__modal__${+new Date()}__${Math.random()}`;

      return {
        id,
      };
    },
  });
</script>

<style></style>
