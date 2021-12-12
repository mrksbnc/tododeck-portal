'use strict';

import store from '../store/index';
import ToastVariants from '@/data/enums/toastVariants';
import { TOAST_STORE } from '@/data/constants/vuexConstants';

class NotificationFunctions {
  public infoAlert({ title, text }: { title: string; text: string }): void {
    store.dispatch(TOAST_STORE.ACTIONS.ADD_TOAST, {
      title,
      text,
      variant: ToastVariants.INFO,
    });
  }

  public successAlert({ title, text }: { title: string; text: string }): void {
    store.dispatch(TOAST_STORE.ACTIONS.ADD_TOAST, {
      title,
      text,
      variant: ToastVariants.SUCCESS,
    });
  }

  public warningAlert({ title, text }: { title: string; text: string }): void {
    store.dispatch(TOAST_STORE.ACTIONS.ADD_TOAST, {
      title,
      text,
      variant: ToastVariants.WARNING,
    });
  }

  public errorAlert({ title, text }: { title: string; text: string }): void {
    store.dispatch(TOAST_STORE.ACTIONS.ADD_TOAST, {
      title,
      text,
      variant: ToastVariants.ERROR,
    });
  }
}

export default new NotificationFunctions();
