import { ComponentLibrary } from '@govbr-ds-testing/webcomponents-vue';
import '@govbr-ds/core/dist/core.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.use(ComponentLibrary);
app.mount('#app');