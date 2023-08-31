
import { useEffect, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAuthentication = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {

    const checkPreviousAuth = async () => {
      try {
        const userString = await AsyncStorage.getItem('userData');
        if (userString) {
          const userData: FirebaseAuthTypes.User = JSON.parse(userString);
          setUser(userData);
        }
      } catch (error) {
        console.error('Error retrieving user data from AsyncStorage:', error);
      }
    };

    const unsubscribe = auth().onAuthStateChanged((user) => {
      if (user) {

        try {
          AsyncStorage.setItem('userData', JSON.stringify(user));
        } catch (error) {
          console.error('Error saving user data to AsyncStorage:', error);
        }
        setUser(user);
      } else {

        try {
          AsyncStorage.removeItem('userData');
        } catch (error) {
          console.error('Error removing user data from AsyncStorage:', error);
        }
        setUser(null);
      }
    });


    checkPreviousAuth();

    return () => unsubscribe();
  }, []);

  return user;
};

export default useAuthentication;
