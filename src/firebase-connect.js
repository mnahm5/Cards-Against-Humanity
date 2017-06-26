import Firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAN2OvOp9zDvXa6CGjg-jNifzHE0pMCtYM',
  authDomain: 'cards-against-humanity-fa612.firebaseapp.com',
  databaseURL: 'https://cards-against-humanity-fa612.firebaseio.com',
  projectId: 'cards-against-humanity-fa612',
  storageBucket: 'cards-against-humanity-fa612.appspot.com',
  messagingSenderId: '516992461417'
}

const app = Firebase.initializeApp(config)

export const db = app.database()
