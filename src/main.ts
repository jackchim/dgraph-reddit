import dotenv from 'dotenv';
dotenv.config();
import Vue from 'vue';
import './plugins/vuetify';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import { store } from '@/state/store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
