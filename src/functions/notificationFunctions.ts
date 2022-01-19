'use strict';

import store from '../store/index';
import { TOAST_STORE } from '@/data/vuex/vuexConstants';
import ToastVariantEnum from '@/data/enums/toastVariantEnum';

class NotificationFunctions {
  public infoAlert({ title, text }: { title: string; text: string }): void {
    store.dispatch(TOAST_STORE.ACTIONS.ADD_TOAST, {
      title,
      text,
      variant: ToastVariantEnum.INFO,
    });
  }

  public successAlert({ title, text }: { title: string; text: string }): void {
    store.dispatch(TOAST_STORE.ACTIONS.ADD_TOAST, {
      title,
      text,
      variant: ToastVariantEnum.SUCCESS,
    });
  }

  public warningAlert({ title, text }: { title: string; text: string }): void {
    store.dispatch(TOAST_STORE.ACTIONS.ADD_TOAST, {
      title,
      text,
      variant: ToastVariantEnum.WARNING,
    });
  }

  public errorAlert({ title, text }: { title: string; text: string }): void {
    store.dispatch(TOAST_STORE.ACTIONS.ADD_TOAST, {
      title,
      text,
      variant: ToastVariantEnum.ERROR,
    });
  }
}

const instance = new NotificationFunctions();
export { instance as notificationFunctions };
