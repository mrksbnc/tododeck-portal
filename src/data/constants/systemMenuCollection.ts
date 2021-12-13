'use strict';

import { NavBarMenuElement } from '@/types/navbar';

const systemMenuCollection: NavBarMenuElement[] = [
  {
    id: 1,
    componentName: '',
    icon: 'fas fa-cog',
    name: 'Settings',
  },
  {
    id: 2,
    componentName: '',
    icon: 'fas fa-sign-out-alt',
    name: 'Logout',
  },
];

export { systemMenuCollection };
