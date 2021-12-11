import {
  IRootState,
  ModalMutationsTypes,
  ModalStateTypes,
  RootMutationsTypes,
  StoreActions,
  ToastMutationsTypes,
  ToastStateTypes,
} from './interfaces';
import { ActionContext, DispatchOptions } from 'vuex';

export type AugmentedActionContextRoot = {
  commit<K extends keyof RootMutationsTypes>(
    key: K,
    payload: Parameters<RootMutationsTypes[K]>[1]
  ): ReturnType<RootMutationsTypes[K]>;
} & Omit<ActionContext<IRootState, IRootState>, 'commit'> & {
    dispatch<K extends keyof StoreActions>(
      key: K,
      payload?: Parameters<StoreActions[K]>[1],
      options?: DispatchOptions
    ): ReturnType<StoreActions[K]>;
  };

export type AugmentedModalActionContext = {
  commit<K extends keyof ModalMutationsTypes>(
    key: K,
    payload: Parameters<ModalMutationsTypes[K]>[1]
  ): ReturnType<ModalMutationsTypes[K]>;
} & Omit<ActionContext<ModalStateTypes, IRootState>, 'commit'>;

export type AugmentedToastActionContext = {
  commit<K extends keyof ToastMutationsTypes>(
    key: K,
    payload: Parameters<ToastMutationsTypes[K]>[1]
  ): ReturnType<ToastMutationsTypes[K]>;
} & Omit<ActionContext<ToastStateTypes, IRootState>, 'commit'>;
