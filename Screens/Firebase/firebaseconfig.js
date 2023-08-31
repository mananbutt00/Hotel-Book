
import * as firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import '@firebase/auth';
import '@firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyABH01FxeIjuaVoFuEJBanOpYciUX4qhjk',
  authDomain: '',
  databaseURL: 'https://gitrexfirebase-9398d.firebaseio.com',
  projectId: 'gitrexfirebase-9398d',
  storageBucket: 'gs://gitrexfirebase-9398d.appspot.com',
  messagingSenderId: '841276993068',
  appId: '1:841276993068:android:4b1172a488ad32bf02eb89',
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export { firebase };