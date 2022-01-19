'use strict';

import user from './user';
import modal from './modal';
import toast from './toast';
import { ModuleTree, Module } from 'vuex';
import { IRootState } from '@/types/vuex/store';

const state: IRootState = {
  root: true,
};

const modules: ModuleTree<IRootState> = {
  modal,
  toast,
  user,
};

const root: Module<IRootState, IRootState> = {
  state,
  modules,
};

export default root;
