import firebase from 'firebase'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBarCU8WYZuW29Lfop60wqoU0rG30SJmIA",
    authDomain: "isa-sandbox-8905.firebaseapp.com",
    databaseURL: "https://isa-sandbox-8905.firebaseio.com",
    projectId: "isa-sandbox-8905",
    storageBucket: "isa-sandbox-8905.appspot.com",
    messagingSenderId: "102268586323"
}
firebase.initializeApp(config)

export const database = firebase.database() //to nam zwraca obiekt który ma wszystkie metody obsługujące bazę danych, tego obiektu będziemy chcieli używać w innych miejscach w aplikacji dlatego exportujemy to jako zmienną