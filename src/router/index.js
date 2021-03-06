import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Event from '@/components/Event'
import EventCreate from '@/components/EventCreate'
import EventConfig from '@/components/EventConfig'
import RoomMap from '@/components/RoomMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
  	  component: Login
    },
    {
      path: '/create',
      name: 'eventCreate',
      component: EventCreate,
    },
    {
      path: '/:eventId',
      name: 'event',
      component: Event,
      props: true,
      children: [
        {
          name: 'eventConfig',
          path: 'config',
          component: EventConfig,
          props: true,
        },
      ],
    },
    {
      path: '/debug/roommap',
      name: 'RoomMap',
      component: RoomMap,
    },
  ],
})
