'use strict';

import {
  AugmentedActionContextRoot,
  AugmentedModalActionContext,
  AugmentedToastActionContext,
} from '../vuex/actions';
import { ModalPropModel, ToastPropModel } from './models';
import { MODAL_STORE, ROOT_STORE, TOAST_STORE } from '@/data/constants/vuexConstants';

//#region *********************** STORE TYPES  ***********************/
export interface StoreActions extends RootActionsTypes, ModalActionsTypes, ToastActionsTypes {}
export interface StoreGetters extends RootGettersTypes, ModalGettersTypes, ToastGettersTypes {}
//#endregion

//#region *********************** ROOT MODULE TYPES  ***********************/
export interface IRootState {
  root: boolean;
  version: string;
}

export interface RootGettersTypes {
  [ROOT_STORE.GETTERS.GET_ROOT_STORE_VERSION](state: IRootState): string;
}

export type RootMutationsTypes<S = IRootState> = {
  [ROOT_STORE.MUTATIONS.UPDATE_VERSION](state: S, payload: string): void;
};
export interface RootActionsTypes {
  [ROOT_STORE.ACTIONS.UPDATE_VERSION](
    { commit }: AugmentedActionContextRoot,
    payload: string
  ): void;
}
//#endregion
//#region *********************** MODAL MODULE TYPES  ***********************/
export interface ModalStateTypes {
  modals: ModalPropModel[];
  rootDispatch: boolean;
}

export interface ModalGettersTypes {
  [MODAL_STORE.GETTERS.GET_MODAL_STATUS](
    state: ModalStateTypes,
    payload: string
  ): ModalPropModel | undefined;
  [MODAL_STORE.GETTERS.GET_MODALS](state: ModalStateTypes): unknown[];
}

export type ModalMutationsTypes<S = ModalStateTypes> = {
  [MODAL_STORE.MUTATIONS.ADD_MODAL](state: S, payload: ModalPropModel): void;
  [MODAL_STORE.MUTATIONS.REMOVE_MODAL](state: S, payload: string): void;
};

export interface ModalActionsTypes {
  [MODAL_STORE.ACTIONS.ADD_MODAL](
    { commit }: AugmentedModalActionContext,
    payload: ModalPropModel
  ): void;
  [MODAL_STORE.ACTIONS.REMOVE_MODAL](
    { commit }: AugmentedModalActionContext,
    payload: number
  ): void;
  [MODAL_STORE.ACTIONS.SET_ROOT_DISPATCH](
    { commit }: AugmentedModalActionContext,
    payload: boolean
  ): void;
}
//#endregion
//#region *********************** MODAL MODULE TYPES  ***********************/
export interface ToastStateTypes {
  toasts: ToastPropModel[];
  rootDispatch: boolean;
}

export interface ToastGettersTypes {
  [TOAST_STORE.GETTERS.GET_TOASTS](state: ToastStateTypes): ToastPropModel[];
}

export type ToastMutationsTypes<S = ToastStateTypes> = {
  [TOAST_STORE.MUTATIONS.ADD_TOAST](state: S, payload: ToastPropModel): void;
  [TOAST_STORE.MUTATIONS.REMOVE_TOAST](state: S, payload: number): void;
  [TOAST_STORE.MUTATIONS.SET_ROOT_DISPATCH](state: S, payload: boolean): void;
};
export interface ToastActionsTypes {
  [TOAST_STORE.ACTIONS.ADD_TOAST](
    { commit }: AugmentedToastActionContext,
    payload: ToastPropModel
  ): void;
  [TOAST_STORE.ACTIONS.REMOVE_TOAST](
    { commit }: AugmentedToastActionContext,
    payload: number
  ): void;
  [TOAST_STORE.ACTIONS.SET_ROOT_DISPATCH](
    { commit }: AugmentedToastActionContext,
    payload: boolean
  ): void;
}
//#endregion
