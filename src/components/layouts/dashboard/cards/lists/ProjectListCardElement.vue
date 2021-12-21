<template>
  <div :id="cardId" :key="projectId" class="bg-white rounded-xl h-36 shadow-lg flex flex-row pt-3">
    <div class="flex flex-col mx-3 h-full">
      <div class="flex flex-row justify-between mb-2">
        <span class="text-indigo-800 text-md text-bold">{{ projectName }}</span>
        <span class="cursor-pointer">
          <i class="far fa-edit text-sm text-gray-500 hover:text-sky-800" />
        </span>
      </div>
      <div @click="openEditProjectModal">
        <span class="text-xs pt-1 font-light">{{ projectDescription }} </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import modalFunctions from '@/functions/modalFunctions';
  import { computed, ComputedRef, defineComponent, ref } from '@vue/runtime-core';

  export default defineComponent({
    name: 'ProjectListCardElement',
    props: {
      id: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      userId: {
        type: Number,
        required: true,
      },
      cardId: {
        type: String,
        default: () => {
          return `project__card__element__${+new Date()}__${Math.random()}`;
        },
      },
    },
    setup(props) {
      const projectId = ref(props.id);
      const projectName: ComputedRef<string> = computed(() => {
        const name = props.name;
        if (name) {
          if (name.length > 45) name.slice(0, 45) + '...';
        }
        return name;
      });

      const projectDescription: ComputedRef<string> = computed(() => {
        const desc = props.description;
        if (desc) {
          if (desc.length > 90) desc.slice(0, 90) + '...';
        }
        return desc;
      });

      const openEditProjectModal = () => {
        modalFunctions.openModal({ component: 'ProjectModal', data: { id: props.id } });
      };

      return { projectId, projectName, projectDescription, openEditProjectModal };
    },
  });
</script>
