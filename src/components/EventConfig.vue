<template>
<div>
  <h1 class="title is-1">Event Configuration</h1>
  <form v-on:submit.prevent="onSubmit">
    <b-field label="Room Layout">
      <b-input type="textarea" v-model="layout"></b-input>
    </b-field>
    <b-field label="Tasks">
      <b-input type="textarea" v-model="tasks"></b-input>
    </b-field>
    <p class="control">
      <button type="submit" class="button is-primary">
        Update Event
      </button>
    </p>
  </form>

  <h2 class="title is-3">Students</h2>
  <pre><code>{{students}}</code></pre>
</div>
</template>

<script>
import {createEvent} from '../gun'

export default {
  name: 'EventConfig',
  props: ['eventId', 'gun'],
  data () {
    return {
      layout: '',
      tasks: '',
      students: '',
    }
  },
  mounted () {
    const paths = ['layout', 'tasks', 'students']
    for (const path of paths) {
      this.gun.get(path).once(value => {
        if (typeof value === 'object') {
          value = JSON.stringify(value, undefined, 2)
        }
        this[path] = value
      })
    }
    /*gun.get('layout').on(layout => {
      this.layout = layout
    })

    gun.get('tasks').on(tasks => {
      this.tasks = tasks
    })

    gun.get('').on(tasks => {
      this.tasks = tasks
    })*/
  },
  methods: {
    onSubmit () {
      try {
        this.gun.get('layout').put(this.layout)
      } catch (e) {
        console.error(e)
      }

      this.gun.get('tasks').put(this.tasks)
    }
  }
}
</script>

<style scoped>
</style>
