import {
  UserStateTypes,
  ModalStateTypes,
  ToastStateTypes,
  UserGetterTypes,
  UserActionTypes,
  ToastActionTypes,
  ModalActionTypes,
  ToastGetterTypes,
  ModalGettersTypes,
  UserMutationTypes,
  ToastMutationTypes,
  ModalMutationTypes,
  IRootState,
} from '@/types/interfaces/store';
import { Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex';

//#region *********************** ROOT STORE MODULE TYPES  ***********************/
export type RootStoreModuleTypes<S = IRootState> = S;
//#endregion
//#region *********************** MODAL STORE MODULE TYPES  ***********************/
export type ModalStoreModuleTypes<S = ModalStateTypes> = Omit<
  VuexStore<S>,
  'commit' | 'getters' | 'dispatch'
> & {
  commit<K extends keyof ModalMutationTypes, P extends Parameters<ModalMutationTypes[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<ModalMutationTypes[K]>;
} & {
  getters: {
    [K in keyof ModalGettersTypes]: ReturnType<ModalGettersTypes[K]>;
  };
} & {
  dispatch<K extends keyof ModalActionTypes>(
    key: K,
    payload?: Parameters<ModalActionTypes[K]>[1],
    options?: DispatchOptions
  ): ReturnType<ModalActionTypes[K]>;
};
//#endregion
//#region *********************** TOAST STORE MODULE TYPES  ***********************/
export type ToastStoreModuleTypes<S = ToastStateTypes> = Omit<
  VuexStore<S>,
  'commit' | 'getters' | 'dispatch'
> & {
  commit<K extends keyof ToastMutationTypes, P extends Parameters<ToastMutationTypes[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<ToastMutationTypes[K]>;
} & {
  getters: {
    [K in keyof ToastGetterTypes]: ReturnType<ToastGetterTypes[K]>;
  };
} & {
  dispatch<K extends keyof ToastActionTypes>(
    key: K,
    payload?: Parameters<ToastActionTypes[K]>[1],
    options?: DispatchOptions
  ): ReturnType<ToastActionTypes[K]>;
};
//#endregion
//#region *********************** USER STORE MODULE TYPES  ***********************/
export type UserStoreModuleTypes<S = UserStateTypes> = Omit<
  VuexStore<S>,
  'commit' | 'getters' | 'dispatch'
> & {
  commit<K extends keyof UserMutationTypes, P extends Parameters<UserMutationTypes[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<UserMutationTypes[K]>;
} & {
  getters: {
    [K in keyof UserGetterTypes]: ReturnType<UserGetterTypes[K]>;
  };
} & {
  dispatch<K extends keyof UserActionTypes>(
    key: K,
    payload?: Parameters<UserActionTypes[K]>[1],
    options?: DispatchOptions
  ): ReturnType<UserActionTypes[K]>;
};
//#endregion
