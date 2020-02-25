import Vue from 'vue'
import Router from 'vue-router'
import Search from './views/Search.vue'
import Join from './views/Join.vue'
import Player from './views/Player.vue'
import store from './store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/join',
      name: 'join',
      component: Join
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/player',
      name: 'player',
      component: Player
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'join' && !store.state.room) next({ name: 'join' })
  else next()
})

export default router
