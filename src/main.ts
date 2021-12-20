import './style';
import App from './App.vue';
import store from './store';
import router from './router';
import { createApp } from 'vue';
import { apiService } from './services/apiService';
import { registerComponents } from './components';
import { getToken, isTokenValid, parseJwt } from './utils/token';

const Portal = createApp(App).use(store).use(router);
registerComponents(Portal);

async function init() {
  if (isTokenValid()) {
    const token = String(getToken());
    const decodedToken = parseJwt(token);

    await apiService.getAppData(decodedToken.userId);
  }
  Portal.mount('#app');
}

init();
