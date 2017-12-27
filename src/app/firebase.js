import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBOmPf5hYkeM0XEsPjkNflj2TcWoWYtJIE',
  authDomain: 'little-big-web-service.firebaseapp.com',
  databaseURL: 'https://little-big-web-service.firebaseio.com',
  projectId: 'little-big-web-service',
  storageBucket: 'little-big-web-service.appspot.com',
  messagingSenderId: '545432469829'
};

firebase.initializeApp(config);
export default firebase;