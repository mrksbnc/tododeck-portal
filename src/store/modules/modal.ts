'use strict';

import {
  IRootState,
  ModalStateTypes,
  ModalGettersTypes,
  ModalActionsTypes,
  ModalMutationsTypes,
} from '@/types/interfaces/store';
import { ModalPropModel } from '@/types/models';
import { MODAL_STORE } from '@/data/constants/vuexConstants';
import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';

const state: ModalStateTypes = {
  modals: [],
  rootDispatch: false,
};

const getters: GetterTree<ModalStateTypes, IRootState> & ModalGettersTypes = {
  [MODAL_STORE.GETTERS.GET_MODAL_STATUS]: (state: ModalStateTypes, payload: string) => {
    return state.modals.find((f) => f.uid == payload);
  },
  [MODAL_STORE.GETTERS.GET_MODALS]: (state: ModalStateTypes) => {
    return state.modals;
  },
};

const mutations: MutationTree<ModalStateTypes> & ModalMutationsTypes = {
  [MODAL_STORE.MUTATIONS.ADD_MODAL]: (state: ModalStateTypes, payload: ModalPropModel) => {
    payload.uid = Math.random() + Date.now() + '_' + payload.name;
    state.modals.push(payload);
  },
  [MODAL_STORE.MUTATIONS.REMOVE_MODAL]: (state: ModalStateTypes, payload: string) => {
    state.modals = [];
    state.modals = state.modals.filter((f) => f.uid != payload);
  },
  [MODAL_STORE.MUTATIONS.SET_ROOT_DISPATCH]: (state: ModalStateTypes, payload: boolean) => {
    state.rootDispatch = payload;
  },
};

const actions: ActionTree<ModalStateTypes, IRootState> & ModalActionsTypes = {
  [MODAL_STORE.ACTIONS.ADD_MODAL]: ({ commit }, payload: ModalPropModel): void => {
    commit(MODAL_STORE.MUTATIONS.ADD_MODAL, payload);
  },
  [MODAL_STORE.ACTIONS.REMOVE_MODAL]: ({ commit }, payload: number): void => {
    commit(MODAL_STORE.MUTATIONS.REMOVE_MODAL, payload);
  },
  [MODAL_STORE.ACTIONS.SET_ROOT_DISPATCH]: ({ commit }, payload: boolean): void => {
    commit(MODAL_STORE.MUTATIONS.SET_MODAL_STATUS, payload);
  },
};

const modal: Module<ModalStateTypes, IRootState> = {
  state,
  getters,
  mutations,
  actions,
};

export default modal;
