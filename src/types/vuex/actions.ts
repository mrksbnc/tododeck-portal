'use strict';

import {
  IRootState,
  UserStateTypes,
  ModalStateTypes,
  ToastStateTypes,
  UserMutationTypes,
  ToastMutationTypes,
  ModalMutationTypes,
} from './store';
import { ActionContext } from 'vuex';

export type AugmentedModalActionContext = {
  commit<K extends keyof ModalMutationTypes>(
    key: K,
    payload: Parameters<ModalMutationTypes[K]>[1]
  ): ReturnType<ModalMutationTypes[K]>;
} & Omit<ActionContext<ModalStateTypes, IRootState>, 'commit'>;

export type AugmentedToastActionContext = {
  commit<K extends keyof ToastMutationTypes>(
    key: K,
    payload: Parameters<ToastMutationTypes[K]>[1]
  ): ReturnType<ToastMutationTypes[K]>;
} & Omit<ActionContext<ToastStateTypes, IRootState>, 'commit'>;

export type AugmentedUserActionContext = {
  commit<K extends keyof UserMutationTypes>(
    key: K,
    payload: Parameters<UserMutationTypes[K]>[1]
  ): ReturnType<UserMutationTypes[K]>;
} & Omit<ActionContext<UserStateTypes, IRootState>, 'commit'>;
