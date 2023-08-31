
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
}
  from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native'

function LandingScreen(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation<any>();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (

    <SafeAreaView style={backgroundStyle}>
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={require('../Images/images/hotel2.jpg')}
        />
        <Image
          style={styles.position1}
          source={require('../Images/images/hotel2.jpg')}
        />
        <Image
          style={styles.position_2}
          source={require('../Images/images/hotel2.jpg')}
        />
        <Image
          style={styles.position_3}
          source={require('../Images/images/hotel2.jpg')}
        />
        <Image
          style={styles.position_4}
          source={require('../Images/images/hotel2.jpg')}
        />
        <Image
          style={styles.position_5}
          source={require('../Images/images/hotel2.jpg')}
        />
        <Image
          style={styles.position_6}
          source={require('../Images/images/hotel2.jpg')}
        />

      </View>
      <View
        style={{
          paddingTop: 250,
          marginTop: 90,

        }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 30, color: 'black', bottom: 60 }}>Lets Find Your Sweat  </Text>
        <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 80, color: 'black', bottom: 60 }}>& Dream Place!</Text>
        <Text style={{ textAlign: 'center', fontSize: 15, margin: 10, bottom: 60 }}>Get the opportunity to stay that you dream  </Text>

        <Text style={{ fontSize: 15, marginLeft: 100, bottom: 60 }}>of at affordable price</Text>


      </View>

      <TouchableOpacity style={{ backgroundColor: 'blue', borderRadius: 10, alignItems: 'center', margin: 25, padding: 8, marginTop: 20, bottom: 60 }}
        onPress={() => navigation.navigate('BottomTab')}
      >
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
          Let's Go
        </Text>

      </TouchableOpacity>






    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  bookbutton:
  {
    marginTop: 60,
    borderRadius: 5,


  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  tinyLogo: {
    position: 'absolute', top: 70, left: 170,
    width: 80,
    height: 70,
    borderRadius: 10,

    transform: [{ rotate: '45deg' }],
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    borderRadius: 5,
    marginVertical: 40,
  },
  position1:
  {
    position: 'absolute',
    top: 140, left: 110,
    width: 70,
    height: 70,
    borderRadius: 10,

    transform: [{ rotate: '45deg' }],
  },

  position_2:
  {
    position: 'absolute',
    top: 220, left: 20,
    width: 70,
    height: 70,
    marginRight: 10,
    marginHorizontal: 20,
    borderRadius: 10,

    transform: [{ rotate: '45deg' }],
  }
  ,
  position_3:
  {
    position: 'absolute',
    top: 30, left: 80,
    width: 70,
    height: 70,
    marginRight: 50,
    borderRadius: 10,

    transform: [{ rotate: '45deg' }],
  }
  ,
  position_4:
  {
    position: 'absolute',
    top: 100, left: 20,
    width: 70,
    height: 70,
    marginRight: 50,
    borderRadius: 10,

    transform: [{ rotate: '45deg' }],
  },
  position_5:
  {
    position: 'absolute',
    top: 180, left: 270, marginVertical: -20, marginHorizontal: -40,
    width: 70,
    height: 70,
    marginRight: 50,
    borderRadius: 10,

    transform: [{ rotate: '45deg' }],
  }
  ,
  position_6:
  {
    position: 'absolute',
    top: 270, left: 190, marginVertical: -50, marginHorizontal: -30,
    width: 70,
    height: 70,
    marginRight: 50,
    borderRadius: 10,

    transform: [{ rotate: '45deg' }],
  }
});

export default LandingScreen;
