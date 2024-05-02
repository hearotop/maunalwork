import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 导入路由配置文件
import ElementPlus from '/media/hearo/data/code/Discard/node_modules/element-plus';
import '/media/hearo/data/code/Discard/node_modules/element-plus/theme-chalk/index.css';

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
