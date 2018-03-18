<template>
<div id="event">
  <router-view :gun="gun" v-if="gun"></router-view>
</div>
</template>

<script>
import {loginEvent} from '../gun'

export default {
  name: 'Event',
  props: ['eventId'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      gun: null,
    }
  },
  created() {
    this.login()
  },
  methods: {
    login () {
      const {eventId} = this
      loginEvent(eventId)
        .then(user => {
          this.gun = user
          console.log('Logged in')
        })
        .catch(err => {
          console.error(err)
        })
      // logged in!
    }
  }
}
</script>

<style scoped>
</style>
