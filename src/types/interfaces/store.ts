'use strict';

import { ModalPropModel, ToastPropModel, UserPropModel } from '../models';
import { MODAL_STORE, TOAST_STORE, USER_STORE } from '@/data/constants/vuexConstants';
import {
  AugmentedModalActionContext,
  AugmentedToastActionContext,
  AugmentedUserActionContext,
} from '../vuex/actions';

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
  modals: ModalPropModel[];
}

export interface ModalGettersTypes {
  [MODAL_STORE.GETTERS.GET_MODAL_STATUS](
    state: ModalStateTypes,
    payload: string
  ): ModalPropModel | undefined;
  [MODAL_STORE.GETTERS.GET_MODALS](state: ModalStateTypes): unknown[];
}

export type ModalMutationTypes<S = ModalStateTypes> = {
  [MODAL_STORE.MUTATIONS.ADD_MODAL](state: S, payload: ModalPropModel): void;
  [MODAL_STORE.MUTATIONS.REMOVE_MODAL](state: S, payload: string): void;
};

export interface ModalActionTypes {
  [MODAL_STORE.ACTIONS.ADD_MODAL](
    { commit }: AugmentedModalActionContext,
    payload: ModalPropModel
  ): void;
  [MODAL_STORE.ACTIONS.REMOVE_MODAL](
    { commit }: AugmentedModalActionContext,
    payload: number
  ): void;
}
//#endregion
//#region *********************** MODAL MODULE TYPES  ***********************/
export interface ToastStateTypes {
  toasts: ToastPropModel[];
}

export interface ToastGetterTypes {
  [TOAST_STORE.GETTERS.GET_TOASTS](state: ToastStateTypes): ToastPropModel[];
}

export type ToastMutationTypes<S = ToastStateTypes> = {
  [TOAST_STORE.MUTATIONS.ADD_TOAST](state: S, payload: ToastPropModel): void;
  [TOAST_STORE.MUTATIONS.REMOVE_TOAST](state: S, payload: number): void;
};
export interface ToastActionTypes {
  [TOAST_STORE.ACTIONS.ADD_TOAST](
    { commit }: AugmentedToastActionContext,
    payload: ToastPropModel
  ): void;
  [TOAST_STORE.ACTIONS.REMOVE_TOAST](
    { commit }: AugmentedToastActionContext,
    payload: number
  ): void;
}
//#endregion
//#region *********************** USER MODULE TYPES  ***********************/
export interface UserStateTypes {
  user: UserPropModel | undefined;
  name: string | undefined;
}

export interface UserGetterTypes {
  [USER_STORE.GETTERS.GET_USER](state: UserStateTypes): UserPropModel;
  [USER_STORE.GETTERS.GET_NAME](state: UserStateTypes): string;
}

export type UserMutationTypes<S = UserStateTypes> = {
  [USER_STORE.MUTATIONS.ADD_USER](state: S, payload: UserPropModel): void;
  [USER_STORE.MUTATIONS.REMOVE_USER](state: S): void;
  [USER_STORE.MUTATIONS.SET_NAME](state: UserStateTypes, payload: string): void;
  [USER_STORE.MUTATIONS.REMOVE_NAME](state: S): void;
};
export interface UserActionTypes {
  [USER_STORE.ACTIONS.ADD_USER](
    { commit }: AugmentedUserActionContext,
    payload: UserPropModel
  ): void;
  [USER_STORE.ACTIONS.REMOVE_USER]({ commit }: AugmentedUserActionContext): void;
  [USER_STORE.ACTIONS.SET_NAME]({ commit }: AugmentedUserActionContext, payload: string): void;
  [USER_STORE.ACTIONS.REMOVE_NAME]({ commit }: AugmentedUserActionContext): void;
}
//#endregion
