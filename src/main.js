// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Header from './components/Header.vue';
import Body from './components/Body.vue';

Vue.config.productionTip = false
Vue.component('app-header', Header);
Vue.component('app-body', Body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
