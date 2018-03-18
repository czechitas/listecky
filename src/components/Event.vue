<template>
</template>

<script>
const gun = Gun()

export default {
  name: 'Event',
  props: ['eventId'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    console.log(gun)
    this.login()
  },
  methods: {
    login () {
      const user = gun.user()
      const {eventId} = this
      /*user.create(`listecky-${eventId}`, eventId, function(ack, err){
        console.log(ack, err)
      })*/
      user.auth(`listecky-${eventId}`, eventId, (ack) => {
        console.log(ack) // TODO: show login form if not exists ({err: Auth attempt failed! Reason: No user!})
        if (!ack.err) {
          this.fetchData(user)
        }
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
