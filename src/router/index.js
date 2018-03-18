import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RoomMap from '@/components/RoomMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/debug/roommap',
      name: 'RoomMap',
      component: RoomMap
    }
  ]
})
