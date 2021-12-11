'use strict';

import {
  ModalStoreModuleTypes,
  RootStoreModuleTypes,
  ToastStoreModuleTypes,
} from '@/types/vuex/modules';
import root from './modules/root';
import { createStore } from 'vuex';
import { IRootState } from '@/types/interfaces/store';

const store = createStore<IRootState>(root);

type StoreModules = {
  root: RootStoreModuleTypes;
  modalModule: ModalStoreModuleTypes;
  toastModule: ToastStoreModuleTypes;
};

export type Store = RootStoreModuleTypes<Pick<StoreModules, 'root'>> &
  ModalStoreModuleTypes<Pick<StoreModules, 'modalModule'>> &
  ToastStoreModuleTypes<Pick<StoreModules, 'toastModule'>>;

export default store;
