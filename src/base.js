const config = {
    apiKey: "AIzaSyD5939RmiHLwTFyKI-0queyo6z0YeCwz9I",
    authDomain: "mercadodev-fa40a.firebaseapp.com",
    databaseURL: "https://mercadodev-fa40a.firebaseio.com",
    projectId: "mercadodev-fa40a",
    storageBucket: "",
    messagingSenderId: "455734150462"
  };

const Reabase = require('re-base')
const firebase = require('firebase/app')
require('firebase/database')

const app = firebase.initializeApp(config)
const base = Reabase.createClass(app.database())

export default base