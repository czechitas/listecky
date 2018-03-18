<script>
export default {
  name: 'App',
  data () {
    return {
      locale: 'en',
      languages: ['en', 'cz']
    }
  },
  watch: {
    locale (val) {
      this.$i18n.locale = val
    }
  }
}
</script>

<template>
  <div id="app">
    <router-view/>
    <select v-model="locale" style="position: fixed; right: 0; bottom: 0">
      <option v-for="code in languages">{{ code }}</option>
    </select>
  </div>
</template>
