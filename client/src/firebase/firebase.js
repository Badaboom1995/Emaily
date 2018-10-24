import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBBpSEqwa7sRy8Ttfdvvd1FTbcMqr3LIBw",
    authDomain: "frank-2-d9cfc.firebaseapp.com",
    databaseURL: "https://frank-2-d9cfc.firebaseio.com",
    projectId: "frank-2-d9cfc",
    storageBucket: "frank-2-d9cfc.appspot.com",
    messagingSenderId: "365215632650"
};


const fire = firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


// database.ref().set({
//     users: {
//         'asdasdq': {
//             name: 'Alex',
//         }
//     },
//     goals: {
//         'ajsnfireweo': {
//             id: '121bansd',
//             name: 'Test goal'
//         }
//     },
//     tasks: {    
//         'ajsnfireweo': {
//             id: '121bansd',
//             name: 'Test goal'
//         }
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((err) => {
//     console.log('This failed:', err);
// })


export{ fire, googleAuthProvider, database as default };