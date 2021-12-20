'use strict';

import AuthComponents from '../enums/authComponents';

const emitCollection = Object.freeze({
  changeMenuView: ({ id }: { id: number }) => {
    return { id };
  },
  changeComponent: () => {
    return;
  },
  setLoading: ({ loadingState }: { loadingState: boolean }) => {
    return loadingState;
  },
});

export default emitCollection;
