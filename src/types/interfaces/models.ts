'use strict';

import ToastVariants from '@/data/enums/toastVariants';

export interface ToastPropModel {
  id: number;
  title: string;
  text: string;
  variant: ToastVariants;
}

export interface ModalPropModel {
  uid: string;
  name: string;
}
