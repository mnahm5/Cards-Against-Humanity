<template>
  <div class="home">
    <div class="row">
      <div class="col-md-offset-2 col-md-8">
        <img class="fit" src="/static/images/home.gif"/>
      </div>
    </div>
    <div class="row">
      <div class="col-md-offset-5 col-md-1">
        <router-link to="/game">
          <a class="btn btn-success">Host Game</a>
        </router-link>
      </div>
      <div class="col-md-2">
        <router-link to="/join">
          <a class="btn btn-primary">Join Game</a>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>

</script>

<style scoped>
  .fit {
    width:100%;
  }
</style>
