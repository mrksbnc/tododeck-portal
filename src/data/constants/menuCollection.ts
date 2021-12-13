'use strict';

import { NavBarMenuElement } from '@/types/navbar';

const menuCollection: NavBarMenuElement[] = [
  {
    id: 1,
    componentName: '',
    icon: 'fas fa-home',
    name: 'Overview',
  },
  {
    id: 2,
    componentName: '',
    icon: 'fas fa-chart-pie',
    name: 'Stats',
  },
  {
    id: 3,
    componentName: '',
    icon: 'fas fa-folder-open',
    name: 'Collections',
  },
  {
    id: 4,
    componentName: '',
    icon: 'far fa-calendar-alt',
    name: 'Calendar',
  },
];

export { menuCollection };
