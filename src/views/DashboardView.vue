<template>
  <div class="w-full h-full flex flex-row bg-slate-100">
    <VerticalNavBar class="w-1/5 h-full" @changeMenuView="changeActiveView" />
    <div class="w-4/5 h-full bg-transparent">
      <component :is="activeViewComponent" />
    </div>
  </div>
</template>

<script lang="ts">
  import DashboardComponents from '@/data/dashboardComponents';
  import { defineComponent, ref } from '@vue/runtime-core';

  export default defineComponent({
    name: 'DashboardView',
    setup() {
      const defaultViewComponent = ref(DashboardComponents.HOME);
      const activeViewComponent = ref(defaultViewComponent.value);

      function changeActiveView({ id }: { id: number }) {
        console.log(id);
      }

      return { activeViewComponent, changeActiveView };
    },
  });
</script>
