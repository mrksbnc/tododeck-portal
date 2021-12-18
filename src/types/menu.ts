'use strict';

export type MenuModul = 'FEATURE' | 'SYSTEM';

export interface MenuElement {
  componentName: string;
  icon: string;
  name: string;
  id: number;
  module: MenuModul;
}

export type VerticalMenuCollectionType = Readonly<{
  feature: MenuElement[];
  system: MenuElement[];
}>;
