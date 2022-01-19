'use strict';

import {
  AugmentedUserActionContext,
  AugmentedModalActionContext,
  AugmentedToastActionContext,
} from './actions';
import { ModalPropModel, ToastPropModel, UserPropModel } from './models';
import { MODAL_STORE, TOAST_STORE, USER_STORE } from '@/data/vuex/vuexConstants';

//#region *********************** STORE TYPES  ***********************/
export interface StoreActions extends ModalActionTypes, ToastActionTypes, UserActionTypes {}
export interface StoreGetters extends ModalGettersTypes, ToastGetterTypes, UserGetterTypes {}
//#endregion

//#region *********************** ROOT MODULE TYPES  ***********************/
export interface IRootState {
  root: boolean;
}
//#endregion
//#region *********************** MODAL MODULE TYPES  ***********************/
export interface ModalStateTypes {
  modal: ModalPropModel | undefined;
}

export interface ModalGettersTypes {
  [MODAL_STORE.GETTERS.GET_MODAL](state: ModalStateTypes): ModalPropModel | undefined;
}

export type ModalMutationTypes<S = ModalStateTypes> = {
  [MODAL_STORE.MUTATIONS.CLOSE_MODAL](state: S): void;
  [MODAL_STORE.MUTATIONS.OPEN_MODAL](state: S, payload: ModalPropModel): void;
};

export interface ModalActionTypes {
  [MODAL_STORE.ACTIONS.CLOSE_MODAL]({ commit }: AugmentedModalActionContext): void;
  [MODAL_STORE.ACTIONS.OPEN_MODAL](
    { commit }: AugmentedModalActionContext,
    payload: ModalPropModel
  ): void;
}
//#endregion
//#region *********************** TOAST MODULE TYPES  ***********************/
export interface ToastStateTypes {
  toasts: ToastPropModel[];
}

export interface ToastGetterTypes {
  [TOAST_STORE.GETTERS.GET_TOASTS](state: ToastStateTypes): ToastPropModel[];
}

export type ToastMutationTypes<S = ToastStateTypes> = {
  [TOAST_STORE.MUTATIONS.ADD_TOAST](state: S, payload: ToastPropModel): void;
  [TOAST_STORE.MUTATIONS.REMOVE_TOAST](state: S, payload: string): void;
};

export interface ToastActionTypes {
  [TOAST_STORE.ACTIONS.ADD_TOAST](
    { commit }: AugmentedToastActionContext,
    payload: ToastPropModel
  ): void;
  [TOAST_STORE.ACTIONS.REMOVE_TOAST](
    { commit }: AugmentedToastActionContext,
    payload: string
  ): void;
}
//#endregion
//#region *********************** USER MODULE TYPES  ***********************/
export interface UserStateTypes {
  user: UserPropModel | undefined;
  name: string | undefined;
  userId: number | undefined;
}

export interface UserGetterTypes {
  [USER_STORE.GETTERS.GET_USER](state: UserStateTypes): UserPropModel | undefined;
  [USER_STORE.GETTERS.GET_NAME](state: UserStateTypes): string | undefined;
  [USER_STORE.GETTERS.GET_USER_ID](state: UserStateTypes): number | undefined;
}

export type UserMutationTypes<S = UserStateTypes> = {
  [USER_STORE.MUTATIONS.ADD_USER](state: S, payload: UserPropModel): void;
  [USER_STORE.MUTATIONS.REMOVE_USER](state: S): void;
  [USER_STORE.MUTATIONS.SET_NAME](state: UserStateTypes, payload: string): void;
  [USER_STORE.MUTATIONS.REMOVE_NAME](state: S): void;
  [USER_STORE.MUTATIONS.SET_USER_ID](state: UserStateTypes, payload: number): void;
  [USER_STORE.MUTATIONS.REMOVE_USER_ID](state: S): void;
};
export interface UserActionTypes {
  [USER_STORE.ACTIONS.ADD_USER](
    { commit }: AugmentedUserActionContext,
    payload: UserPropModel
  ): void;
  [USER_STORE.ACTIONS.REMOVE_USER]({ commit }: AugmentedUserActionContext): void;
  [USER_STORE.ACTIONS.SET_NAME]({ commit }: AugmentedUserActionContext, payload: string): void;
  [USER_STORE.ACTIONS.REMOVE_NAME]({ commit }: AugmentedUserActionContext): void;
  [USER_STORE.ACTIONS.SET_USER_ID]({ commit }: AugmentedUserActionContext, payload: number): void;
  [USER_STORE.ACTIONS.REMOVE_USER_ID]({ commit }: AugmentedUserActionContext): void;
}
//#endregion
