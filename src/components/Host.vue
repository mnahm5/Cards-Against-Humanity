<template>
  <div class="host">
    <form v-on:submit="save">
      <div class="form-group">
        <input type="text" class="form-control" id="username" placeholder="Username" v-model="userData.username">
      </div>
      <div class="form-group">
        <input type="hidden" class="form-control" id="gameId" placeholder="Username" v-model="userData.gameId">
      </div>
      <button type="submit" class="btn btn-success">Host Game</button>
    </form>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import {db} from '../firebase-connect'

  export default {
    data: () => ({
      games: {}
    }),

    firebase: {
      games: {
        source: db.ref('games'),
        // Optional, allows you to handle any errors.
        cancelCallback (err) {
          console.error(err)
        }
      }
    },
    computed: {
      ...mapGetters([
        'userData'
      ])
    },
    methods: {
      ...mapActions([
        'saveUserData'
      ]),
      save () {
        const randomstring = require('randomstring')
        this.userData.gameId = randomstring.generate({
          length: 4,
          charset: 'alphanumeric'
        })
        this.saveUserData()
        this.$firebaseRefs.games.push({
          gameID: this.userData.gameId,
          username: [this.userData.username]
        })
        this.$router.push({
          path: 'game'
        })
      }
    }
  }
</script>

<style scoped>
  .form-control {
    max-width: 250px;
    min-width: 200px;
  }
</style>
