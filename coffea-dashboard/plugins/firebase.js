import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDPUoa11byjl8vD6j0ICqFC4IFTo4WhdQM',
  authDomain: 'coffea-app-8aa0d.firebaseapp.com',
  databaseURL: 'https://coffea-app-8aa0d.firebaseio.com',
  projectId: 'coffea-app-8aa0d',
  storageBucket: 'coffea-app-8aa0d.appspot.com',
  messagingSenderId: '227884185780',
  appId: '1:227884185780:web:1393471c1641c2c5203fe1'
}

firebase.initializeApp(firebaseConfig);
// Initialize Firebase

let app = null
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const DB = firebase.database()
export const StoreDB = firebase.firestore()

export default firebase
