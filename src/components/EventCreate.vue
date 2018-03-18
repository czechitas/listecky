<template>
<form v-on:submit.prevent="onSubmit">
  <b-field label="Event Identifier">
    <b-input v-model="eventId" />
  </b-field>
  <p class="control">
    <button type="submit" class="button is-primary">
      Create Event
    </button>
  </p>
</form>

</template>

<script>
import {createEvent} from '../gun'

export default {
  name: 'EventCreate',
  data () {
    return {
      eventId: '',
    }
  },
  methods: {
    onSubmit () {
      const {eventId} = this

      createEvent(eventId)
        .then(() => {
          this.$router.push({name: 'eventConfig', params: {eventId}})
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
</style>
