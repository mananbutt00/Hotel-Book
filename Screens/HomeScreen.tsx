import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
// import { createSlice } from "@reduxjs/toolkit"
// import { configureStore } from "@reduxjs/toolkit";
// import { Provider } from "react-redux";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
  Image,
  ImageBackground,
  TextInput,

  TouchableOpacity,
} from 'react-native';


const Tab = createBottomTabNavigator();
function HomeScreen(): JSX.Element {
  const [isTrue, setIsTrue] = useState("true");


  return (


    <View style={styles.flex1}>
      <ImageBackground
        style={styles.imagestyle}
        source={require('../Images/images/hotel2.jpg')}
      >
        <View style={styles.container}>
          <Text style={{ color: 'white', margin: 10, fontSize: 14 }}>Current Location</Text>
          <Text style={{ fontWeight: 'bold', color: 'white', margin: 10, marginTop: -10, fontSize: 17 }}>Labuan Bajo , INA</Text>
          <TextInput style={{ width: '95%', borderRadius: 40, padding: 7, backgroundColor: 'white', marginRight: -30, justifyContent: 'center' }} placeholder={'Look for homestay'} />

        </View>
      </ImageBackground>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontWeight: 'bold', color: 'black', marginLeft: 20, fontSize: 20, bottom: 10, }}>Hotel Near You</Text>
        <TouchableOpacity style={{ marginRight: 10, bottom: 10, }}><Text style={{ color: 'blue' }}>View All</Text></TouchableOpacity>
      </View>

      <View style={styles.flex2}>



        <ImageBackground
          style={styles.position_1}
          source={require('../Images/images/hotel2.jpg')}

          imageStyle={{

            top: 10, left: 20,
            width: 35,
            height: 55,
            paddingTop: 18,
            borderRadius: 6,


            transform: [{ scale: 2 }],

          }}
        >

          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 7, marginLeft: 8, top: 60, }}>Paradise Resort</Text>
          <Text style={{ color: 'white', fontSize: 6, marginLeft: 8, top: 60, }}>Labuan  Bajo</Text>
          <Text style={{ color: 'white', fontSize: 8, marginLeft: 8, top: 60, }}>440$/night</Text>
        </ImageBackground>

        <ImageBackground
          style={styles.position_2}
          source={require('../Images/images/hotel2.jpg')}
          imageStyle={{

            top: -16, left: 20,
            width: 35,
            height: 55,
            paddingTop: 10,
            borderRadius: 6,


            transform: [{ scale: 2 }],

          }}
        >


          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 7, marginLeft: 8, top: 30, }}>Buntago</Text>
          <Text style={{ color: 'white', fontSize: 6, marginLeft: 8, top: 30, }}>Labuan  Bajo</Text>
          <Text style={{ color: 'white', fontSize: 8, marginLeft: 8, top: 30, }}>118$/night</Text>

        </ImageBackground>
        <Image
          style={styles.position_3}
          source={require('../Images/images/hotel2.jpg')}
        />
      </View>

      <View style={styles.flex3}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontWeight: 'bold', color: 'black', marginLeft: 1, fontSize: 18, bottom: 10, }}>Explore Places</Text>

          <TouchableOpacity style={{ marginRight: 10, top: 1, }}><Text style={{ color: 'blue', bottom: 5, }}
            onPress={() => setIsTrue("false")}
          >View All {isTrue}</Text></TouchableOpacity>

        </View>
        <ImageBackground

          style={styles.position_4}
          source={require('../Images/images/hotel2.jpg')}

          imageStyle={{

            top: -5, left: 15,
            width: 25,
            height: 25,

            paddingTop: 18,
            borderRadius: 5,


            transform: [{ scale: 2 }],

          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 8, marginLeft: 17, top: 10, }}>Bali</Text>

        </ImageBackground>
        <ImageBackground
          style={styles.position_5}
          source={require('../Images/images/hotel2.jpg')}
          imageStyle={{

            top: -5, left: 15,
            width: 25,
            height: 25,

            paddingTop: 18,
            borderRadius: 5,


            transform: [{ scale: 2 }],

          }}

        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 8, marginLeft: 8, top: 7, }}>Labuan Bajo</Text>
        </ImageBackground>


        <Image
          style={styles.position_6}
          source={require('../Images/images/hotel2.jpg')}
        />

      </View>


    </View>




  );
}
const styles = StyleSheet.create({

  imagestyle: {

    height: 200,
    width: 400,
    flex: 2,

    resizeMode: 'cover',
  },
  container: {

    flex: 1,
    padding: 40,
    marginLeft: -40,


  },
  flex1: {
    borderRadius: 20,
    flex: 2,

  },
  flex2: {
    marginLeft: 20,
    flex: 2,



  },
  flex3: {
    marginLeft: 20,
    flex: 1,


  },
  flex4: {
    marginLeft: 20,
    flex: 0.5,


  },
  position_1:
  {

    top: 60, left: 30,
    width: 70,
    height: 70,




    transform: [{ scale: 2 }],
  },
  position_2:
  {

    top: 50, left: 190,
    width: 70,
    height: 70,


    resizeMode: 'cover',
    transform: [{ scale: 2 }],
  },
  position_3:
  {
    position: 'absolute',
    top: 50, left: 350,
    width: 70,
    height: 20,
    paddingTop: 110,
    borderRadius: 10,
    transform: [{ scale: 2 }],
    resizeMode: 'cover',
  },
  position_4:
  {

    top: 60, left: 30,
    width: 70,
    height: 70,


    transform: [{ scale: 2 }],
  },
  position_5:
  {
    position: 'absolute',
    top: 70, left: 190,
    width: 70,
    height: 50,
    paddingTop: 6,
    borderRadius: 10,

    resizeMode: 'cover',
    transform: [{ scale: 2 }],
  },
  position_6:
  {
    position: 'absolute',
    top: 50, left: 330,
    width: 70,
    height: 70,
    paddingTop: 6,
    borderRadius: 10,

    resizeMode: 'cover',
    transform: [{ scale: 2 }],
  },
});
export default HomeScreen;