import Vue from 'vue'
import Router from 'vue-router'
import comp00 from './views/helloworld.vue'
import spec10 from './views/spec/10.vue'
import specUndef from './views/spec/undef.vue'
import world3 from './views/world/3.vue'
import world4 from './views/world/4.vue'
import world5 from './views/world/5.vue'
import world6 from './views/world/6.vue'
import specPseudos from './views/spec/pseudos.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/helloworld',
    component: comp00
  }, {
    path: '/spec/pseudos',
    component: specPseudos
  }, {
    path: '/spec/10',
    component: spec10
  }, {
    path: '/spec/undef',
    component: specUndef
  }, {
    path: '/world/3',
    component: world3
  }, {
    path: '/world/4',
    component: world4
  }, {
    path: '/world/5',
    component: world5
  }, {
    path: '/world/6',
    component: world6
  }]
})
