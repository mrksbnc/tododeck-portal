<template>
  <BaseModal class="w-4/6 h-4/6">
    <template #header>
      <span class="text-indigo-800 font-bold text-lg">
        {{ title }}
      </span>
    </template>
    <template #body>
      <div class="">
        <BaseInput v-model="projectName" label="Project name" class="mb-2" />
        <BaseTextarea label="Description" />
      </div>
    </template>
    <template #modal__footer> </template>
  </BaseModal>
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from '@vue/runtime-core';
  import BaseInput from '../controls/BaseInput.vue';

  export default defineComponent({
    name: 'ProjectModal',
    components: { BaseInput },
    inheritAttrs: true,
    props: {
      projectId: {
        default: -1,
        type: Number,
      },
    },
    setup(props) {
      const projectName = ref('');
      const description = ref('');

      const title = computed(() => {
        return props.projectId === -1 ? 'Create a new Project' : 'Edit Project';
      });

      return {
        projectName,
        description,
        title,
      };
    },
  });
</script>

<style></style>
