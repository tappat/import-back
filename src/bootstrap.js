import Vue from 'vue';
import vueConfig from 'vue-config';
import lodash from 'lodash';
import VueLodash from 'vue-lodash';
import VueI18n from 'vue-i18n';
import '#Styles/sass/style.scss';
import config from '@/config';

Vue.use(vueConfig, config);
Vue.use(VueLodash, lodash);

Vue.use(VueI18n);

