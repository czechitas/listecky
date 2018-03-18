<script>
export default {
  name: 'Login',
  data () {
    return {
      eventId: ''
    }
  },
  methods: {
    enter: function (event) {
      // TODO: Validate if event exists
      this.$router.push(this.eventId);
    }
  }
}
</script>

<template>
  <div class="columns is-desktop is-vcentered" style="min-height: 100vh">
    <div class="column"></div>
    <form class="column is-narrow" v-on:submit.prevent="enter">
      <b-field :label="$t('enterPass')">
          <b-input v-model="eventId" pattern="[a-z0-9-_]+"></b-input>
      </b-field>
      <input type="submit" class="button" :value="$t('enterButton')">
    </form>
    <div class="column"></div>
  </div>
</template>

<i18n>
en:
  enterPass: "Event password"
  enterButton: "Enter"
cz:
  enterPass: "Heslo události"
  enterButton: "Vstoupit"
</i18n>
