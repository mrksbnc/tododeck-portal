'use strict';

import store from '../store/index';
import { ModalPropModel } from '@/types/vuex/models';
import { componentNameCollection } from '@/components';
import { MODAL_STORE } from '@/data/vuex/vuexConstants';
import { notificationFunctions } from './notificationFunctions';

class ModalFunctions {
  public openModal<T>({ component, data }: { component: string; data?: T }): void {
    if (!componentNameCollection.includes(component)) {
      notificationFunctions.errorAlert({
        title: 'Missing Component Error',
        text: 'The required component could not be found!',
      });
      return;
    }

    const modalPropModel: ModalPropModel<T> = {
      id: `open__modal__${+new Date()}__${Math.random()}`,
      component,
      data,
    };

    store.dispatch(MODAL_STORE.ACTIONS.OPEN_MODAL, modalPropModel);
  }
}

export default new ModalFunctions();
