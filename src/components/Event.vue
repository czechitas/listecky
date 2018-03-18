<template>
</template>

<script>
import {loginEvent} from '../gun'

export default {
  name: 'Event',
  props: ['eventId'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
          console.log(user)
          return this.fetchData(user)
        })
        .catch(err => {
          console.error(err)
        })
      // logged in!
    },
    fetchData (user) {

    }
  }
}
</script>

<style scoped>
</style>
