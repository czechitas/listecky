import Vue from 'vue'
import Router from 'vue-router'
import Event from '@/components/Event'
import EventCreate from '@/components/EventCreate'

Vue.use(Router)

export default new Router({
  routes: [
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
    },
  ],
})
