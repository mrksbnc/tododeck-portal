'use strict';

import {
  IRootState,
  ToastStateTypes,
  ToastActionTypes,
  ToastGetterTypes,
  ToastMutationTypes,
} from '@/types/vuex/store';
import { ToastPropModel } from '@/types/vuex/models';
import { TOAST_STORE } from '@/data/vuex/vuexConstants';
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';

const state: ToastStateTypes = {
  toasts: [],
};

const getters: GetterTree<ToastStateTypes, IRootState> & ToastGetterTypes = {
  [TOAST_STORE.GETTERS.GET_TOASTS]: (state: ToastStateTypes) => {
    return state.toasts;
  },
};

const mutations: MutationTree<ToastStateTypes> & ToastMutationTypes = {
  [TOAST_STORE.MUTATIONS.ADD_TOAST]: (state: ToastStateTypes, payload: ToastPropModel): void => {
    payload.id = Math.random() + '_' + Date.now();
    state.toasts.push(payload);
  },
  [TOAST_STORE.MUTATIONS.REMOVE_TOAST]: (state: ToastStateTypes, payload: string): void => {
    return state.toasts.forEach((e, i) => {
      if (e.id === payload) state.toasts.slice(i, 1);
    });
  },
};

const actions: ActionTree<ToastStateTypes, IRootState> & ToastActionTypes = {
  [TOAST_STORE.ACTIONS.ADD_TOAST]: ({ commit }, payload: ToastPropModel): void => {
    commit(TOAST_STORE.MUTATIONS.ADD_TOAST, payload);
  },
  [TOAST_STORE.ACTIONS.REMOVE_TOAST]: ({ commit }, payload: string): void => {
    commit(TOAST_STORE.MUTATIONS.REMOVE_TOAST, payload);
  },
};

const toast: Module<ToastStateTypes, IRootState> = {
  state,
  getters,
  mutations,
  actions,
};

export default toast;
