'use strict';

import ToastVariants from '@/data/enums/toastVariantEnum';

export type ToastPropModel = {
  id: string;
  title: string;
  text: string;
  variant: ToastVariants;
};

export type ModalPropModel<T = undefined> = {
  id: number | string;
  component: string;
  data?: T;
};

export type UserPropModel = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
};

export type ProjectModel = {
  id: number;
  name: string;
  description?: string;
  userId: number;
};
