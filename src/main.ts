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

NotificationFunctions.infoAlert({ title: 'hello', text: 'im working bro im fckin working' });
