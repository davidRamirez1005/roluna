import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './shared/router/index'
import { createPinia } from 'pinia';
import { useLanguage } from './language/useLanguage.js';
import 'element-plus/dist/index.css'
import './assets/css/style.css'
import 'animate.css';
import 'tailwindcss/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App)
const pinia = createPinia();
useLanguage();

app.use(ElementPlus)
app.use(router)
app.use(ElementPlus)
app.use(pinia);

app.mount('#app')