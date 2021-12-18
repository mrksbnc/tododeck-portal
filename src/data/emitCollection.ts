'use strict';

import { MenuModul } from '@/types/menu';

const emitCollection = Object.freeze({
  changeMenu: ({ id, module }: { id: number; module: MenuModul }) => {
    return { id, module };
  },
});

export default emitCollection;
