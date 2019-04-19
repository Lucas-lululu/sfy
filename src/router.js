import Vue from 'vue'
import Router from 'vue-router'
import home from "./views/home.vue"
import index from "./views/index.vue"
import ppsl from "./views/ppsl.vue"
import Customized from './views/Customized'
import Case_details3 from './views/Case_details3'
import baidu from "./views/baidu.vue"
import Bedroom from "./views/Bedroom.vue"
import design from "./views/design.vue"
import Study from "./views/Study.vue"
import gallery from "./views/gallery.vue"
import Pro from "./views/Pro.vue"
import Topic from "./views/Topic.vue"
import Renovation from "./views/Renovation.vue"
import Vr from "./views/Vr.vue"
import gonglue from "./views/gonglue.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:home,children:[
      {path:'/',component:index},
      {path:'/index',component:index},
      {path:'/ppsl',component:ppsl},
      {path:"/customized", component:Customized},
      {path:"/Case_details3", component:Case_details3},
      {path:"/baidu", component:baidu},
      {path:"/Bedroom", component:Bedroom},
      {path:"/design", component:design},
      {path:"/Study", component:Study},
      {path:"/gallery", component:gallery},
      {path:"/Pro", component:Pro},
      {path:"/Renovation", component:Renovation},
      {path:"/gonglue", component:gonglue},
    ]},
    {path:"/Topic", component:Topic},
    {path:"/Vr", component:Vr},
  ]
})
