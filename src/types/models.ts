'use strict';

import ToastVariants from '@/data/enums/toastVariants';

export type ToastPropModel = {
  id: number;
  title: string;
  text: string;
  variant: ToastVariants;
};

export type ModalPropModel = {
  id: number;
  name: string;
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
