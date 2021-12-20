'use strict';

import store from '../store/index';
import { componentNameCollection } from '@/components';
import { notificationFunctions } from './notificationFunctions';
import { MODAL_STORE } from '@/data/constants/vuexConstants';

class ModalFunctions {
  public openModal({ componentName }: { componentName: string }): void {
    if (!componentNameCollection.includes(componentName)) {
      notificationFunctions.errorAlert({
        title: 'Missing Component Error',
        text: 'The required component could not be found!',
      });
      return;
    }

    store.dispatch(MODAL_STORE.ACTIONS.ADD_MODAL, { name: componentName });
  }
}

export default new ModalFunctions();
