import './style';
import App from './App.vue';
import store from './store';
import router from './router';
import { createApp } from 'vue';
import { registerComponents } from './components';
import notificationFunctions from './functions/notificationFunctions';

const Portal = createApp(App).use(store).use(router);
registerComponents(Portal);

Portal.mount('#app');

notificationFunctions.errorAlert({ text: 'dsadsad', title: 'sakjsbf' });
