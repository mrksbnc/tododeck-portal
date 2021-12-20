'use strict';

import {
  IRootState,
  ModalStateTypes,
  ModalGettersTypes,
  ModalActionTypes,
  ModalMutationTypes,
} from '@/types/interfaces/store';
import { ModalPropModel } from '@/types/models';
import { MODAL_STORE } from '@/data/constants/vuexConstants';
import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';

const state: ModalStateTypes = {
  modal: undefined,
};

const getters: GetterTree<ModalStateTypes, IRootState> & ModalGettersTypes = {
  [MODAL_STORE.GETTERS.GET_MODAL]: (state: ModalStateTypes) => {
    return state.modal;
  },
};

const mutations: MutationTree<ModalStateTypes> & ModalMutationTypes = {
  [MODAL_STORE.MUTATIONS.OPEN_MODAL]: (state: ModalStateTypes, payload: ModalPropModel) => {
    state.modal = payload;
  },
  [MODAL_STORE.MUTATIONS.CLOSE_MODAL]: (state: ModalStateTypes) => {
    state.modal = undefined;
  },
};

const actions: ActionTree<ModalStateTypes, IRootState> & ModalActionTypes = {
  [MODAL_STORE.ACTIONS.OPEN_MODAL]: ({ commit }, payload: ModalPropModel): void => {
    commit(MODAL_STORE.MUTATIONS.OPEN_MODAL, payload);
  },
  [MODAL_STORE.ACTIONS.CLOSE_MODAL]: ({ commit }): void => {
    commit(MODAL_STORE.MUTATIONS.CLOSE_MODAL, undefined);
  },
};

const modal: Module<ModalStateTypes, IRootState> = {
  state,
  getters,
  mutations,
  actions,
};

export default modal;
