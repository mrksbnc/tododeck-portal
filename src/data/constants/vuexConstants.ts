'use strict';

import {
  RootActions,
  RootGetters,
  RootMutations,
  ModalActions,
  ModalGetters,
  ModalMutations,
  ToastGetters,
  ToastMutations,
  ToastActions,
  UserGetters,
  UserMutations,
  UserActions,
} from '../enums/vuex';

export const ROOT_STORE = {
  GETTERS: RootGetters,
  MUTATIONS: RootMutations,
  ACTIONS: RootActions,
};

export const MODAL_STORE = {
  GETTERS: ModalGetters,
  MUTATIONS: ModalMutations,
  ACTIONS: ModalActions,
};

export const TOAST_STORE = {
  GETTERS: ToastGetters,
  MUTATIONS: ToastMutations,
  ACTIONS: ToastActions,
};

export const USER_STORE = {
  GETTERS: UserGetters,
  MUTATIONS: UserMutations,
  ACTIONS: UserActions,
};
