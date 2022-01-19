'use strict';

import {
  IRootState,
  UserStateTypes,
  UserActionTypes,
  UserGetterTypes,
  UserMutationTypes,
} from '@/types/vuex/store';
import { UserPropModel } from '@/types/vuex/models';
import { USER_STORE } from '@/data/vuex/vuexConstants';
import { Module, ActionTree, GetterTree, MutationTree } from 'vuex';

const state: UserStateTypes = {
  user: undefined,
  name: undefined,
  userId: undefined,
};

const getters: GetterTree<UserStateTypes, IRootState> & UserGetterTypes = {
  [USER_STORE.GETTERS.GET_USER]: (state: UserStateTypes): UserPropModel | undefined => {
    return state.user;
  },
  [USER_STORE.GETTERS.GET_NAME]: (state: UserStateTypes): string | undefined => {
    return state.name;
  },
  [USER_STORE.GETTERS.GET_USER_ID]: (state: UserStateTypes): number | undefined => {
    return state.userId;
  },
};

const mutations: MutationTree<UserStateTypes> & UserMutationTypes = {
  [USER_STORE.MUTATIONS.ADD_USER]: (state: UserStateTypes, payload: UserPropModel): void => {
    state.user = payload;
  },
  [USER_STORE.MUTATIONS.REMOVE_USER]: (state: UserStateTypes): void => {
    state.user = undefined;
  },
  [USER_STORE.MUTATIONS.SET_NAME]: (state: UserStateTypes, payload: string): void => {
    state.name = payload;
  },
  [USER_STORE.MUTATIONS.REMOVE_NAME]: (state: UserStateTypes): void => {
    state.name = undefined;
  },
  [USER_STORE.MUTATIONS.SET_USER_ID]: (state: UserStateTypes, payload: number): void => {
    state.userId = payload;
  },
  [USER_STORE.MUTATIONS.REMOVE_USER_ID]: (state: UserStateTypes): void => {
    state.userId = undefined;
  },
};

const actions: ActionTree<UserStateTypes, IRootState> & UserActionTypes = {
  [USER_STORE.ACTIONS.ADD_USER]: ({ commit }, payload: UserPropModel): void => {
    commit(USER_STORE.MUTATIONS.ADD_USER, payload);
  },
  [USER_STORE.ACTIONS.REMOVE_USER]: ({ commit }): void => {
    commit(USER_STORE.MUTATIONS.REMOVE_USER, undefined);
  },
  [USER_STORE.ACTIONS.SET_NAME]: ({ commit }, payload: string): void => {
    commit(USER_STORE.MUTATIONS.SET_NAME, payload);
  },
  [USER_STORE.ACTIONS.REMOVE_NAME]: ({ commit }): void => {
    commit(USER_STORE.MUTATIONS.REMOVE_USER, undefined);
  },
  [USER_STORE.ACTIONS.SET_USER_ID]: ({ commit }, payload: number): void => {
    commit(USER_STORE.MUTATIONS.SET_USER_ID, payload);
  },
  [USER_STORE.ACTIONS.REMOVE_USER_ID]: ({ commit }): void => {
    commit(USER_STORE.MUTATIONS.REMOVE_USER_ID, undefined);
  },
};

const user: Module<UserStateTypes, IRootState> = {
  state,
  getters,
  mutations,
  actions,
};

export default user;
