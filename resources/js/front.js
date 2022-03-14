require('./bootstrap');

window.Vue = require('vue');

import App from './views/App';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path:'/',
            name: 'home',
            component: Home
        },
        {
            path:'/about',
            name: 'about',
            component: About
        },
        {
            path:'/contact',
            name: 'contact',
            component: Contact
        }
    ]
});

const app = new Vue({
    el: '#app',
    render: h => h(App),
    router
});
