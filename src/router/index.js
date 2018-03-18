import Vue from 'vue'
import Router from 'vue-router'
import Event from '@/components/Event'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:eventId',
      name: 'event',
      component: Event,
      props: true,
    },
  ],
})
