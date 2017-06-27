<template>
  <div class="join">
    <form v-on:submit="save">
      <div class="form-group">
        <input type="text" class="form-control" id="gameId" placeholder="Game Id" v-model="userData.gameId">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="username" placeholder="Username" v-model="userData.username">
      </div>
      <button type="submit" class="btn btn-primary">Join Game</button>
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
        const username = this.userData.username
        let usernames = null
        let gameKey = null
        this.$firebaseRefs.games.orderByChild('gameID').equalTo(this.userData.gameId).once('value', function (snapshot) {
          const game = snapshot.val()
          if (game) {
            snapshot.forEach(function (game) {
              gameKey = game.key
              usernames = game.val().usernames
              if (!usernames.includes(username)) {
                usernames.push(username)
              } else {
                alert('Username already taken')
              }
            })
          } else {
            console.log('No')
          }
        })
        if (gameKey) {
          this.$firebaseRefs.games.child(gameKey).child('usernames').set(usernames)
          this.saveUserData()
          this.$router.push({
            path: 'game'
          })
        }
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
