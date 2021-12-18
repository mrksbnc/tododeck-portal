'use strict';

import ToastVariants from '@/data/enums/toastVariants';

export type ToastPropModel = {
  id: number;
  title: string;
  text: string;
  variant: ToastVariants;
};

export type ModalPropModel = {
  uid: string;
  name: string;
};
