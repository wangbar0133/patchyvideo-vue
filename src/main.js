import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "font-awesome/css/font-awesome.min.css";
/*import echarts from "echarts";*/
import login from "./views/Login.vue";
import $ from "jquery";
import linkify from 'vue-linkify';

let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/sunburst')
require('echarts/lib/component/legend')
/*以上三个包为按需导入的图表必须项*/

import { VueCropper } from "vue-cropper";
import VueI18n from 'vue-i18n';
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(ElementUI);
Vue.use(VueCropper);
Vue.use(VueI18n);
Vue.directive('linkified', linkify);
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;

/*Vue.config.keyCodes.Left_Arrow = 37;
Vue.config.keyCodes.Right_Arrow = 39;
Vue.config.keyCodes.Up_Arrow = 38;
Vue.config.keyCodes.Dw_Arrow = 40;*/
/*
keyCode 37 = Left
keyCode 38 = Up
keyCode 39 = Right
keyCode 40 = Down
*/
const i18n = new VueI18n({
  locale: 'CHS', // set locale
  fallbackLocale: 'ENG',
})

//多浏览器语言识别兼容，统一小写
const localMap = {
  'en':'ENG',
  'en-us': 'ENG',
  'en-gb':'ENG',
  'zh': 'CHS',
  'zh-cn': 'CHS',
  'zh-tw':'CHT',
  'zh-hk':'CHT',
  'ja':'JPN'
}

console.log('run!');
if (!localStorage.getItem('lang')) {
  //多浏览器语言设定兼容方案
  var lang = (navigator.language || navigator.browserLanguage).toLowerCase();
  localStorage.setItem('lang', localMap[lang] || 'CHS');
}
i18n.locale = localStorage.getItem('lang');

var vm = new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
