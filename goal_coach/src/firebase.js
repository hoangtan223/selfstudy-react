import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAj-Ri_rczlftXSj-SEMQ-NBrgNqngZ47c",
    authDomain: "goalcoach-a3df1.firebaseapp.com",
    databaseURL: "https://goalcoach-a3df1.firebaseio.com",
    projectId: "goalcoach-a3df1",
    storageBucket: "goalcoach-a3df1.appspot.com",
    messagingSenderId: "620999627387"
  };

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals')
