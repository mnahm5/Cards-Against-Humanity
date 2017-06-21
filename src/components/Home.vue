<template>
  <div class="home">
    <div class="row">
      <div class="col-md-offset-2 col-md-8">
        <img class="fit" src="/static/images/home.gif"/>
      </div>
    </div>
    <div class="row">
      <div class="col-md-offset-5 col-md-1">
        <router-link to="/host">
          <a class="btn btn-success">Host Game</a>
        </router-link>
      </div>
      <div class="right-button col-md-2">
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
  .right-button {
    margin-left: 20px;
  }
  .fit {
    width:100%;
  }
</style>
