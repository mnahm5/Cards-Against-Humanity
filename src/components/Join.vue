<template>
  <div class="join">
    <form v-on:submit="save">
      <div class="form-group">
        <input type="text" class="form-control" id="gameId" placeholder="Game Id" v-model="userData.gameId">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="username" placeholder="Username" v-model="userData.username">
      </div>
      <button type="submit" class="btn btn-success">Join Game</button>
    </form>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
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
        this.saveUserData()
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
