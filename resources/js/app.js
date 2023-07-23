import Vue from 'vue';

import VueMaterial from 'vue-material'

import 'vue-material/dist/vue-material.min.css'

import VueRouter from 'vue-router';

import axios from 'axios';

import VueAxios from 'vue-axios';

import App from './App.vue';

import Dashboard from './components/Dashboard.vue';

import Escalation from './components/Escalation.vue';

import Home from './components/Home.vue';

import Register from './components/Register.vue';

import Login from './components/Login.vue';

import Create from './components/Create.vue';

import ListUser from './components/User/List.vue';

Vue.use(VueMaterial)

Vue.use(VueRouter);

Vue.use(VueAxios, axios);

axios.defaults.baseURL = 'http://crm.bharatpe.com/api';

const router = new VueRouter({

    routes: [
        {
        path: '/',
        name: 'login',
        component: Login
    },{
        path: '/register',
        name: 'register',
        component: Register,
        meta: {auth: false}
    },{
        path: '/login',
        name: 'login',
        component: Login,
        meta: {auth: false}
    },{
        path: '/home',
        name: 'home',
        component: Home,
        meta: {auth: false}
    },{
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: {auth: true}
    },{
        path: '/create',
        name: 'create',
        component: Create,
        meta: {auth: true}
    },{
            path: '/escalation',
            name: 'escalation',
            component: Escalation,
            meta: {auth: true}
        }]
});

Vue.router = router

Vue.use(require('@websanova/vue-auth'), {

    auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),

    http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),

    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),

});

App.router = Vue.router

new Vue(App).$mount('#app');
