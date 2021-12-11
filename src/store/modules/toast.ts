'use strict';

import {
  IRootState,
  ToastStateTypes,
  ToastActionsTypes,
  ToastGettersTypes,
  ToastMutationsTypes,
} from '@/types/interfaces/store';
import { ToastPropModel } from '@/types/interfaces/models';
import { TOAST_STORE } from '@/data/constants/vuexConstants';
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';

const state: ToastStateTypes = {
  toasts: [],
  rootDispatch: false,
};

const getters: GetterTree<ToastStateTypes, IRootState> & ToastGettersTypes = {
  [TOAST_STORE.GETTERS.GET_TOASTS]: (state: ToastStateTypes) => {
    return state.toasts;
  },
};

const mutations: MutationTree<ToastStateTypes> & ToastMutationsTypes = {
  [TOAST_STORE.MUTATIONS.ADD_TOAST]: (state: ToastStateTypes, payload: ToastPropModel) => {
    payload.id = Math.random() + Date.now();
    state.toasts.push(payload);
  },
  [TOAST_STORE.MUTATIONS.REMOVE_TOAST]: (state: ToastStateTypes, payload: number) => {
    const filtered = state.toasts.filter((f) => f.id != payload);
    state.toasts = filtered;
  },
  [TOAST_STORE.MUTATIONS.SET_ROOT_DISPATCH]: (state: ToastStateTypes, payload: boolean) => {
    state.rootDispatch = payload;
  },
};

const actions: ActionTree<ToastStateTypes, IRootState> & ToastActionsTypes = {
  [TOAST_STORE.ACTIONS.ADD_TOAST]: ({ commit }, payload: ToastPropModel): void => {
    commit(TOAST_STORE.MUTATIONS.ADD_TOAST, payload);
  },
  [TOAST_STORE.ACTIONS.REMOVE_TOAST]: ({ commit }, payload: number): void => {
    commit(TOAST_STORE.MUTATIONS.REMOVE_TOAST, payload);
  },
  [TOAST_STORE.ACTIONS.SET_ROOT_DISPATCH]: ({ commit }, payload: boolean): void => {
    commit(TOAST_STORE.MUTATIONS.SET_ROOT_DISPATCH, payload);
  },
};

const toast: Module<ToastStateTypes, IRootState> = {
  state,
  getters,
  mutations,
  actions,
};

export default toast;
