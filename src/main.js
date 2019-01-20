import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import routerConfig from './router.config'

Vue.use(VueRouter);
Vue.use(ElementUI);

const router = new VueRouter({routes: routerConfig});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
