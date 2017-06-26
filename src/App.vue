<template>
  <div id="app">
    <navbar></navbar>
    <div class="page-header">
      <h1>Firebase Test</h1>
    </div>
    <div class="container">
      <router-view :questions='questions'></router-view>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Firebase from 'firebase'

  let config = {
    apiKey: 'AIzaSyAN2OvOp9zDvXa6CGjg-jNifzHE0pMCtYM',
    authDomain: 'cards-against-humanity-fa612.firebaseapp.com',
    databaseURL: 'https://cards-against-humanity-fa612.firebaseio.com',
    projectId: 'cards-against-humanity-fa612',
    storageBucket: 'cards-against-humanity-fa612.appspot.com',
    messagingSenderId: '516992461417'
  }

  let app = Firebase.initializeApp(config)
  let db = app.database()
  let questionsRef = db.ref('questions')

  export default {
    name: 'app',
    components: {Navbar},
    firebase: {
      questions: questionsRef
    }
  }
</script>

<style>

</style>
