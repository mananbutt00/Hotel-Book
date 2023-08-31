
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import App from './App';
import {name as appName} from './app.json';
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });

  const assets = {
    lottieFiles: {
      animations: require('./Animations/animation.json'),
    
    },
  };
 
AppRegistry.registerComponent(appName, () => App);
export default assets;