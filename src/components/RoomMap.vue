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
  <div
    class="desks"
    :style="{
        'grid-template-rows': `repeat(${map.size.rows}, 1fr)`,
        'grid-template-columns': `repeat(${map.size.columns}, 1fr)`,
      }"
  >
    <div
      class="desk-place"
      v-for="(desk, deskIndex) in map.desks"
      :desk="desk"
      :index="deskIndex"
      :key="deskIndex"
      :style="{
          'grid-row-start': desk.layout.position.row,
          'grid-row-end': desk.layout.position.row + 1,
          'grid-column-start': desk.layout.position.column,
          'grid-column-end': desk.layout.position.column + 1,
        }"
      style="position: relative;"
    >
      <p style="position:absolute;top:0.5em;left:0.5em;">
        {{ desk.layout.position.row }} / {{ desk.layout.position.column }}
      </p>
      <div
        class="desk-shape"
        :style="{
          'left': desk.layout.position.column_shift,
          'top': desk.layout.position.row_shift,
          'transform': `rotate(${desk.layout.rotation}deg)`,
        }"
      >
        <h2>deskIndex: {{ deskIndex }}</h2>
        <p>name: {{ desk.name }}</p>
        <p>shape: {{ desk.layout.shape }}</p>
        <div>
          chairs:
          <div
            class="tag is-primary"
            v-for="(chair, chairIndex) in desk.layout.chairs"
            :chair="chair"
            :index="chairIndex"
            :key="chairIndex"
          >
            {{ chairIndex }}
            {{ chair.student.name }}
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>
  .desks {
    display: grid;
    min-height: 100%;
    width: 100%;

    /* debug */
    background-color: rgba(0, 0, 255, 0.5);
  }

  .desk-place {
    display: grid;
    align-items: center;
    justify-items: center;

    /* debug */
    background-color: rgba(255, 255, 0, 0.5);
    border: 1px solid black;
    margin: 2px;
  }

  .desk-shape {
    transform-origin: center;
    position: relative;

    /* debug */
    width: 80%;
    height: 40%;
    padding: 1em;
    background-color: hsla(120, 100%, 40%, 0.5);
    color: white;
    font-size: 12px;
    text-align: center;
    border: 2px solid grey;
  }
</style>
