import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyDHmueowEVUdBQPDSheyU_OjXVampAxY58",
  authDomain: "forum-d5077.firebaseapp.com",
  databaseURL: "https://forum-d5077.firebaseio.com",
  projectId: "forum-d5077",
  storageBucket: "forum-d5077.appspot.com",
  messagingSenderId: "1017648255442"
};
firebase.initializeApp(config);

export const database = firebase.database().ref("/post");
