import Vue from 'vue';
import App from './App.vue';

import axios from 'axios';
import VueAxios from 'vue-axios';
import FrontsideTranslationPlugin from './plugins/frontside_translation_plugin.js';

Vue.use(VueAxios, axios, FrontsideTranslationPlugin)

Vue.config.productionTip = true;

new Vue({
  render: h => h(App),
}).$mount('#app')
