import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import {

  StyleSheet,

  View,

  Image,

} from 'react-native';
import BookingScreen from './BookingScreen';
import Check_In from './Profile';
import LandingScreen from './LandingScreen';
import HomeScreen from './HomeScreen';
import Setting from './Setting';
import ImageGalary from './ImageGalary';
const Tab = createMaterialBottomTabNavigator();
function BottomTab(): JSX.Element {

  return (

    <Tab.Navigator barStyle={{ backgroundColor: 'white', padding: 1, margin: -20,}} >

      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarIcon: ({ }) =>
          (
            <View>
              <Image
                source={require('../Images/images/home.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            </View>
          )
        }}

      />
      <Tab.Screen name="Booking" component={BookingScreen}
        options={{
          tabBarIcon: ({ }) =>
          (
            <View>
              <Image
                source={require('../Images/images/location.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            </View>
          )
        }}




      />
      <Tab.Screen name="Watchlist" component={ImageGalary}
        options={{
          tabBarIcon: ({ }) =>
          (
            <View>
              <Image
                source={require('../Images/images/heart.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            </View>
          )
        }}




      />

      <Tab.Screen name="Profile" component={Check_In}
        options={{
          tabBarIcon: ({ }) =>
          (
            <View>
              <Image
                source={require('../Images/images/profile.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            </View>
          )
        }}
      />






    </Tab.Navigator>








  );
}
const styles = StyleSheet.create({

 
});

export default BottomTab;