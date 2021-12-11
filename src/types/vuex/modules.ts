import {
  IRootState,
  ModalStateTypes,
  ToastStateTypes,
  RootActionsTypes,
  RootGettersTypes,
  ToastActionsTypes,
  ModalActionsTypes,
  ModalGettersTypes,
  ToastGettersTypes,
  RootMutationsTypes,
  ModalMutationsTypes,
  ToastMutationsTypes,
} from '@/types/interfaces/store';
import { Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex';

//#region *********************** ROOT STORE MODULE TYPES  ***********************/
export type RootStoreModuleTypes<S = IRootState> = Omit<
  VuexStore<S>,
  'commit' | 'getters' | 'dispatch'
> & {
  commit<K extends keyof RootMutationsTypes, P extends Parameters<RootMutationsTypes[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<RootMutationsTypes[K]>;
} & {
  getters: {
    [K in keyof RootGettersTypes]: ReturnType<RootGettersTypes[K]>;
  };
} & {
  dispatch<K extends keyof RootActionsTypes>(
    key: K,
    payload?: Parameters<RootActionsTypes[K]>[1],
    options?: DispatchOptions
  ): ReturnType<RootActionsTypes[K]>;
};
//#endregion
//#region *********************** MODAL STORE MODULE TYPES  ***********************/
export type ModalStoreModuleTypes<S = ModalStateTypes> = Omit<
  VuexStore<S>,
  'commit' | 'getters' | 'dispatch'
> & {
  commit<K extends keyof ModalMutationsTypes, P extends Parameters<ModalMutationsTypes[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<ModalMutationsTypes[K]>;
} & {
  getters: {
    [K in keyof ModalGettersTypes]: ReturnType<ModalGettersTypes[K]>;
  };
} & {
  dispatch<K extends keyof ModalActionsTypes>(
    key: K,
    payload?: Parameters<ModalActionsTypes[K]>[1],
    options?: DispatchOptions
  ): ReturnType<ModalActionsTypes[K]>;
};
//#endregion
//#region *********************** TOAAST STORE MODULE TYPES  ***********************/
export type ToastStoreModuleTypes<S = ToastStateTypes> = Omit<
  VuexStore<S>,
  'commit' | 'getters' | 'dispatch'
> & {
  commit<K extends keyof ToastMutationsTypes, P extends Parameters<ToastMutationsTypes[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<ToastMutationsTypes[K]>;
} & {
  getters: {
    [K in keyof ToastGettersTypes]: ReturnType<ToastGettersTypes[K]>;
  };
} & {
  dispatch<K extends keyof ToastActionsTypes>(
    key: K,
    payload?: Parameters<ToastActionsTypes[K]>[1],
    options?: DispatchOptions
  ): ReturnType<ToastActionsTypes[K]>;
};
//#endregion
