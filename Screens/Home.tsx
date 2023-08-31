import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { enableScreens } from 'react-native-screens';
import auth from '@react-native-firebase/auth';

enableScreens();
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import useAuthentication from '../Screens/Firebase/useAuthentication';
function Home(): JSX.Element {
  const navigation = useNavigation<any>();
  const user = useAuthentication();
  const [logout, setLogout] = useState('');

  const handleLogout = async () => {
    try {
      await auth().signOut();
      setLogout('true');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  if (user) {
    navigation.navigate('Home');

  }

  return (
    <View >
      <Text style={{ color: 'red', fontSize: 30, fontWeight: 'bold', top: 50, marginLeft: 20 }}>Welcome Home Screen!!! </Text>


      <TouchableOpacity style={{ backgroundColor: 'black', padding: 10, margin: 90, borderRadius: 10, top: 300 }} onPress={handleLogout}>

        <Text style={{ color: 'white' }}>Logout</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({


});

export default Home;
