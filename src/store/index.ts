'use strict';

import {
  RootStoreModuleTypes,
  ToastStoreModuleTypes,
  ModalStoreModuleTypes,
  UserStoreModuleTypes,
} from '@/types/vuex/modules';
import root from './modules/root';
import { createStore } from 'vuex';
import { IRootState } from '@/types/interfaces/store';

const store = createStore<IRootState>(root);

type StoreModules = {
  root: RootStoreModuleTypes;
  userModule: UserStoreModuleTypes;
  modalModule: ModalStoreModuleTypes;
  toastModule: ToastStoreModuleTypes;
};

export type Store = RootStoreModuleTypes<Pick<StoreModules, 'root'>> &
  UserStoreModuleTypes<Pick<StoreModules, 'userModule'>> &
  ModalStoreModuleTypes<Pick<StoreModules, 'modalModule'>> &
  ToastStoreModuleTypes<Pick<StoreModules, 'toastModule'>>;

export default store;
