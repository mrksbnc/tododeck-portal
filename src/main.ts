import './style';
import App from './App.vue';
import store from './store';
import router from './router';
import { createApp } from 'vue';
import { registerComponents } from './components';

const Portal = createApp(App).use(store).use(router);
registerComponents(Portal);

Portal.mount('#app');
