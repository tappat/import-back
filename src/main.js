import Vue from 'vue';
import VueI18n from 'vue-i18n';
import store from './store';
import App from './App';
import router from './router';
import './bootstrap';
import locales from './lang';

const i18n = new VueI18n({
  locale: 'se-SV',
  ...locales,
});

Vue.config.productionTip = false;
/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  i18n,
  store,
  router,
  components: { App },
  template: '<App/>',
});

export default app;
