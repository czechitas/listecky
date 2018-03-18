<script>
import DefaultLayout from '../fixtures/layout'

export default {
  name: 'RoomMap',
  data () {
    return {
      'map': DefaultLayout
    }
  }
}
</script>

<template>
  <div>
    <div
      v-for="(desk, deskIndex) in map.desks"
      v-bind:desk="desk"
      v-bind:index="deskIndex"
      v-bind:key="deskIndex"
    >

      <pre>{{ desk }}</pre>
      <br>{{ desk.name }}

      <br>{{ desk.layout }}
      <br>
    </div>
  </div>
</template>
