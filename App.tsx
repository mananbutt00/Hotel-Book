
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import AboutUs from './Screens/AboutUs';
import useAuthentication from './Screens/Firebase/useAuthentication';
import Logout from './Screens/Logout';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';
import BookingScreen from './Screens/BookingScreen';
import LandingScreen from './Screens/LandingScreen';
import BottomTab from './Screens/BottomTab';
import Check_In from './Screens/Profile';
import messaging from '@react-native-firebase/messaging';
import React, { useState, useEffect } from 'react';
import store from './Redux/store';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import Redux from './Redux/Redux';
import ImageGalary from './Screens/ImageGalary';
import ImageDisplay from './Screens/ImageDisplay';
import DelImageDisplay from './Screens/DelImageDisplay';
import LottieView from 'lottie-react-native';
let persistor = persistStore(store);
import {

  Text,

  View,

  Image,
  Alert,
} from 'react-native';
import HomeScreen from './Screens/HomeScreen';


function App(): JSX.Element {
  const user = useAuthentication();

  useEffect(() => {
   
    const unsubscribe = messaging().onMessage(async remoteMessage => {
       Alert.alert(JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, []);


useEffect(() =>
{
  requestUserPermission();
  notificationListner();
  getToken();
},[]);

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }


 const  notificationListner=()=>
{
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );

    });
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
      
        }
       
      });
    }
const getToken= async()=>
{
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();
    console.log(token);
  }

  return (
<Provider store={store}>
<PersistGate loading={ 
   <LottieView
        source={require("./Animations/AppAnimation.json")}
        autoPlay
        style={{ 
          width: '100%',
          height: '100%',
          backgroundColor:'black'
        }}
      />
        


} persistor={persistor}>
    <NavigationContainer >

      <Stack.Navigator initialRouteName='Login'>
        {!user ? (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />

            <Stack.Screen name="LandingScreen" component={LandingScreen} />

            <Stack.Screen name="BookingScreen" component={BookingScreen} />
            <Stack.Screen name="Check_In" component={Check_In} />
            
            
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={DrawerNavigation} options={{
              headerShown: false,
            }} />
            <Stack.Screen name="BottomTab" component={BottomTab} />
            <Stack.Screen name="Redux" component={Redux} />
            <Stack.Screen name="Counter" component={Redux} />
            <Stack.Screen name="ImageGalary" component={ImageGalary} />
            <Stack.Screen name="ImageDisplay" component={ImageDisplay} />
            <Stack.Screen name="DelImageDisplay" component={DelImageDisplay} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
   
    </PersistGate>
    </Provider>
  );
}


const DrawerNavigation = () => {
  const user = useAuthentication();

  return (


    <Drawer.Navigator drawerContent={
      (props) => {
        return (
          <SafeAreaView>
            <View style={{
              height: 180,
              width: '100%',
              backgroundColor: '#7b68ee',
            }}>

              <Image

                source={require('./Images/DrawerImage.jpg')}
                style={{

                  height: 120,
                  width: 120,
                  borderRadius: 65,
                  top: 10,

                }}
              />


              <Text style={{ color: 'white', fontWeight: 'bold', top: 10, }}>{user?.displayName}Gitrex </Text>
              <Text style={{ color: 'white', top: 6, }}>{user?.email}</Text>
              <Svg viewBox="0 10 1440 380" height={70}>
                <Path fill="#7b68ee" fill-opacity="1" d="M0,256L80,224C160,192,320,128,480,
        138.7C640,149,800,235,960,240C1120,245,1280,171,1360,133.3L1440,96L1440,0L1360,0C1280,
        0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"/>
              </Svg>
            </View>
            <DrawerItemList {...props} />
          </SafeAreaView>
        )
      }
    } screenOptions={{
      drawerActiveTintColor: "#7b68ee",
      drawerInactiveTintColor: "#7b68ee",
      drawerStyle: {

        width: 200,

      },

    }}
    >
      <Drawer.Screen name="Home" component={LandingScreen} options={{
        headerStyle: {
          backgroundColor: '#8791F8',
        },
        drawerIcon: () => <Icon size={20} name={'home'} color={'#7b68ee'} />
      }} />
      <Drawer.Screen name="Booking" component={BookingScreen} options={{
        headerStyle: {
          backgroundColor: '#8791F8',
        },
        drawerIcon: () => <Icon size={20} name={'cog'} color={'#7b68ee'} />
      }} />
      <Drawer.Screen name="share" component={HomeScreen} options={{
        headerStyle: {
          backgroundColor: '#8791F8',
        },
        drawerIcon: () => <Icon size={20} name={'share-alt'} color={'#7b68ee'} />
      }} />
      <Drawer.Screen name="AboutUs" component={AboutUs} options={{
        headerStyle: {
          backgroundColor: '#8791F8',
        },
        drawerIcon: () => <Icon size={20} name={'info-circle'} color={'#7b68ee'} />
      }} />
      <Drawer.Screen name="Logout" component={Logout} options={{
        headerStyle: {
          backgroundColor: '#8791F8',
        },
        drawerIcon: () => <Icon size={20} name={'sign-out'} color={'#7b68ee'} />
      }} />
    </Drawer.Navigator>




  );
}

export default App;
