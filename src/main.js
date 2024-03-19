
import { createApp } from 'vue'
import App from './App.vue';
import router from './routing/route';

const app = createApp(App);
app.use(router);
app.mount('#app');
