'use strict';

import AuthComponents from './enums/authComponents';

const emitCollection = Object.freeze({
  changeMenuView: ({ id }: { id: number }) => {
    return { id };
  },
  changeComponent: () => {
    return;
  },
  changeAuthComponent: ({ component }: { component: AuthComponents }) => {},
  setLoading: ({ loadingState }: { loadingState: boolean }) => {
    return loadingState;
  },
});

export default emitCollection;
