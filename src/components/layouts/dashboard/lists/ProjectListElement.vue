<template>
  <div class="bg-white rounded-xl h-36 shadow-lg flex flex-row pt-3">
    <div class="flex flex-col mx-3 h-full">
      <div class="flex flex-row justify-between mb-2">
        <span class="text-indigo-800 text-md text-bold">{{ projectName }}</span>
        <span class="cursor-pointer">
          <i class="far fa-edit text-sm text-gray-500 hover:text-sky-800" />
        </span>
      </div>
      <div>
        <span class="text-xs pt-1 font-light">{{ projectDescription }} </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { computed, ComputedRef, defineComponent } from '@vue/runtime-core';

  export default defineComponent({
    name: 'ProjectListElement',
    props: {
      project: {
        type: Object,
        required: true,
      },
    },
    setup(props) {
      const projectName: ComputedRef<string> = computed(() => {
        const name = props.project?.name;
        if (name) {
          if (name.length > 90) name.slice(0, 90) + '...';
        }
        return name;
      });

      const projectDescription: ComputedRef<string> = computed(() => {
        const desc = props.project?.description;
        if (desc) {
          if (desc.length > 90) desc.slice(0, 90) + '...';
        }
        return desc;
      });

      return { projectName, projectDescription };
    },
  });
</script>
