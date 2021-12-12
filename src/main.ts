import './style';
import './plugins';
import App from './App.vue';
import store from './store';
import router from './router';
import { createApp } from 'vue';
import { registerComponents } from './components';
import NotificationFunctions from './functions/notificationFunctions';

const Portal = createApp(App).use(store).use(router);
registerComponents(Portal);

Portal.mount('#app');

NotificationFunctions.successAlert({ title: 'safsafsa', text: 'kdsfgbkdsbk' });
NotificationFunctions.errorAlert({ title: 'safsafsa', text: 'kdsfgbkdsbk' });
NotificationFunctions.infoAlert({ title: 'safsafsa', text: 'kdsfgbkdsbk' });
NotificationFunctions.warningAlert({ title: 'safsafsa', text: 'kdsfgbkdsbk' });
NotificationFunctions.successAlert({ title: 'safsafsa', text: 'kdsfgbkdsbk' });
