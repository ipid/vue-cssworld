import Vue from 'vue'
import Router from 'vue-router'
import comp00 from './views/helloworld.vue'
import spec10 from './views/spec-10.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/helloworld',
    component: comp00
  }, {
    path: '/spec-10',
    component: spec10
  }]
})
