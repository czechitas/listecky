<template>
<div>
<h2>Event Config {{ eventId }}</h2>
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
</div>
</template>

<script>
import {createEvent} from '../gun'

export default {
  name: 'EventConfig',
  props: ['eventId', 'gun'],
  data () {
    return {
    }
  },
  mounted () {
    console.log(this.gun)
  },
  methods: {
    onSubmit () {
      console.log(this.gun)
      const {eventId} = this
    }
  }
}
</script>

<style scoped>
</style>
