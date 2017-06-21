import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Join from '@/components/Join'
import Game from '@/components/Game'
import Host from '@/components/Host'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/join',
      name: Join,
      component: Join
    },
    {
      path: '/host',
      name: Host,
      component: Host
    },
    {
      path: '/game',
      name: Game,
      component: Game
    }
  ]
})
