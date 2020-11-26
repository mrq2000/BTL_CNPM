import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBUEVSHShy0-TCq650LUuceTqpcVm1cndE',
  authDomain: 'cnpm-f76b5.firebaseapp.com',
  databaseURL: 'https://cnpm-f76b5.firebaseio.com',
  projectId: 'cnpm-f76b5',
  storageBucket: 'cnpm-f76b5.appspot.com',
  messagingSenderId: '536258684280',
  appId: '1:536258684280:web:0f591fec765113ce6e948d',
  measurementId: 'G-QS2CXR6MXV',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().languageCode = 'vi';
}
