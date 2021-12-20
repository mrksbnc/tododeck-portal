<template>
  <div class="bg-white rounded-xl h-36 shadow-lg">
    <div :class="{ color }"></div>
    <div class="flex flex-col">
      <div class="pt-3 pl-3">
        <span class="text-indigo-800 text-md text-bold">{{ projectName }}</span>
      </div>
      <div>
        <span class="pl-3 text-xs">{{ projectDescription }} </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent } from '@vue/runtime-core';

  export default defineComponent({
    name: 'ProjectListElement',
    props: {
      project: {
        type: Object,
        required: true,
      },
    },
    setup(props) {
      const projectName = computed(() => {
        const name = props.project?.name;
        if (name) {
          if (name.length > 45) name.slice(0, 45) + '...';
        }
        return name;
      });

      const projectDescription = computed(() => {
        const desc = props.project?.description;
        if (desc) {
          if (desc.length > 45) desc.slice(0, 45) + '...';
        }
        return desc;
      });

      const color = computed(() => {
        return props.project?.color;
      });

      return { projectName, projectDescription, color };
    },
  });
</script>
