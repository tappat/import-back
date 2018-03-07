import Vue from 'vue';
import { SET_GLOBAL_NAME } from './mutation-types';

export default {
  [SET_GLOBAL_NAME](state, data) {
    Vue.set(state, 'globalName', data);
  },
};
