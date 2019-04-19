import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import {Header,Button,Swipe,SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Button.name,Button)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)

import Distpicker from 'v-distpicker'
Vue.component('v-distpicker', Distpicker)

import axios from 'axios'
axios.defaults.withCredentials=true
Vue.prototype.axios=axios

Vue.filter("datetimeFilter",function(val){
  var now=new Date(val);
  var y=now.getFullYear();
  var m=now.getMonth()+1;
  var d=now.getDate();
  var h=now.getHours();
  var mi=now.getMinutes();
  var s=now.getSeconds();
  m<10&&(m="0"+m);
  d<10&&(d="0"+d);
  return `${y}/${m}/${d} ${h}:${mi}:${s}`
})
Vue.filter("datetime",function(val){
  var now=new Date(val);
  var y=now.getFullYear();
  var m=now.getMonth()+1;
  var d=now.getDate();
  var h=now.getHours();
  var mi=now.getMinutes();
  var s=now.getSeconds();
  m<10&&(m="0"+m);
  d<10&&(d="0"+d);
  return `${y}-${m}-${d}`
})

router.afterEach((to, from, next) => {
window.scrollTo(0, 0);
});

import qs from 'qs'
Vue.prototype.qs=qs;

import Vuex from "vuex";
Vue.use(Vuex);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
