import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import Vue from 'vue'
import VueI18n from 'vue-i18n'

import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(Buefy)

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
