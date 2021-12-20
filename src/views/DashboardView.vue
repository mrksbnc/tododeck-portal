<template>
  <div class="w-full h-full flex flex-row bg-white overflow-hidden p-2">
    <VerticalNavBar class="w-1/4 h-full" @changeMenuView="changeActiveView" />
    <div class="w-full h-full">
      <component :is="activeViewComponent" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from '@vue/runtime-core';
  import DashboardComponents from '@/data/enums/dashboardComponents';

  export default defineComponent({
    name: 'DashboardView',
    setup() {
      const defaultViewComponent = ref(DashboardComponents.HOME);
      const activeViewComponent = ref(defaultViewComponent.value);

      const changeActiveView = ({ id }: { id: number }) => {
        console.log(id);
      };

      return { activeViewComponent, changeActiveView };
    },
  });
</script>
