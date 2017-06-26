<template>
  <div class="join">
    <h1>Game</h1>
    <p v-for="question in questions">
      {{ question.text }}
    </p>
  </div>
</template>
<script>
  export default {
    props: ['questions']
  }
</script>

<style scoped>

</style>
