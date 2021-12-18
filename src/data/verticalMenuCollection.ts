'use strict';

import MenuModuls from './enums/menuModules';
import SystemMenuIds from './enums/systemMenuIds';
import VerticalMenuIds from './enums/verticalMenuIds';
import { VerticalMenuCollectionType, MenuElement } from '@/types/menu';

const verticalMenuCollection: VerticalMenuCollectionType = Object.freeze({
  feature: [
    {
      componentName: '',
      icon: 'fas fa-home',
      name: 'Overview',
      id: VerticalMenuIds.OVERVIEW,
      module: MenuModuls.FEATURE,
    },
    {
      componentName: '',
      icon: 'fas fa-chart-pie',
      name: 'Statistic',
      id: VerticalMenuIds.STATISTIC,
      module: MenuModuls.FEATURE,
    },
    {
      componentName: '',
      icon: 'fas fa-folder',
      name: 'Collections',
      id: VerticalMenuIds.COLLECTION,
      module: MenuModuls.FEATURE,
    },
    {
      componentName: '',
      icon: 'fas fa-tasks',
      name: 'Todos',
      id: VerticalMenuIds.TODO,
      module: MenuModuls.FEATURE,
    },
    {
      componentName: '',
      icon: 'far fa-calendar-alt',
      name: 'Calendar',
      id: VerticalMenuIds.CALENDAR,
      module: MenuModuls.FEATURE,
    },
  ] as MenuElement[],
  system: [
    {
      componentName: '',
      icon: 'fas fa-cog',
      name: 'Settings',
      id: SystemMenuIds.SETTING,
      module: MenuModuls.SYSTEM,
    },
    {
      componentName: '',
      icon: 'fas fa-sign-out-alt',
      name: 'Sign out',
      id: SystemMenuIds.SIGN_OUT,
      module: MenuModuls.SYSTEM,
    },
  ] as MenuElement[],
});

export default verticalMenuCollection;
