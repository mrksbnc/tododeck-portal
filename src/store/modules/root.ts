'use strict';

import {
  IRootState,
  RootActionsTypes,
  RootGettersTypes,
  RootMutationsTypes,
} from '@/types/interfaces/store';
import modal from './modal';
import toast from './toast';
import { ROOT_STORE } from '@/data/constants/vuexConstants';
import { GetterTree, MutationTree, ActionTree, ModuleTree, Module } from 'vuex';

const state: IRootState = {
  root: true,
  version: '0.0.1',
};

const getters: GetterTree<IRootState, IRootState> & RootGettersTypes = {
  [ROOT_STORE.GETTERS.GET_ROOT_STORE_VERSION]: (state: IRootState) => {
    return state.version;
  },
};

const mutations: MutationTree<IRootState> & RootMutationsTypes = {
  [ROOT_STORE.MUTATIONS.UPDATE_VERSION]: (state: IRootState, payload: string) => {
    state.version = payload;
  },
};

const actions: ActionTree<IRootState, IRootState> & RootActionsTypes = {
  [ROOT_STORE.ACTIONS.UPDATE_VERSION]: ({ commit }, payload: string): void => {
    commit(ROOT_STORE.MUTATIONS.UPDATE_VERSION, payload);
  },
};

const modules: ModuleTree<IRootState> = {
  modal,
  toast,
};

const root: Module<IRootState, IRootState> = {
  state,
  getters,
  mutations,
  actions,
  modules,
};

export default root;
