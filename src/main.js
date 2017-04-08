// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import '../src/assets/css/bootstrap.min.css'

import './config/rem'
import FastClick from 'fastclick'
import {routerMode} from './config/env'
import routes from './router/routes'

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
    routes,
    mode: 'hash',
    strict: process.env.NODE_ENV !== 'production'
})


/* eslint-disable no-new */
new Vue({
  router,
  components: { App }
}).$mount('#app')
