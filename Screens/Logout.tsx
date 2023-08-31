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
  StyleProp,
} from 'react-native';
import useAuthentication from '../Screens/Firebase/useAuthentication';
function Logout(): JSX.Element {
  const navigation = useNavigation<any>();
  const user = useAuthentication();

  const handleLogout = async () => {
    try {
      await auth().signOut();

    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  handleLogout();
  return (

    <View >


    </View>
  );
}

const styles = StyleSheet.create({


});

export default Logout;
