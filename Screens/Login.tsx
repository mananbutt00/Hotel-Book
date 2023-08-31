import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { enableScreens } from 'react-native-screens';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
enableScreens();
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import useAuthentication from '../Screens/Firebase/useAuthentication';

function Login(): JSX.Element {
  const navigation = useNavigation<any>();
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mailError, setMailError] = useState('');
  const [passError, setPassError] = useState('');
  const MIN_PASSWORD_LENGTH = 8;
  const user = useAuthentication();

  const loginfire = async () => {
    try {
      const isuserlogin = await auth().signInWithEmailAndPassword(
        email,
        password,
      ).then(res => console.log('res', res));
      console.log(isuserlogin);
      console.log('email', email);
      console.log('password', password);
      Alert.alert('Login Sucessfully')
      navigation.navigate('Home');

    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  const validatepass = () => {
    if (password.length < MIN_PASSWORD_LENGTH) {
      setPassError('password length must be greater than 8.');
      return false;
    } else {
      setPassError('');
      return true;
    }
  };

  const validatemail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setMailError('Please enter a valid email address.');
      return false;
    } else {
      setMailError('');
      return true;
    }
  }

  const handleSubmit = () => {
    const ispassValid = validatepass();
    const isemailValid = validatemail();
    if (ispassValid && isemailValid) {
      loginfire();
    }
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  if (user) {
    navigation.navigate('Home');
  }

  if (!user) {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>

      </View>
      <View style={styles.maincontainer}>
        <Text style={styles.headerText}>Login</Text>
        <Text style={styles.subHeaderText}>Please sign in to continue.</Text>

        <View style={styles.inputContainer}>
          <Icon size={20} name={'envelope-o'} color={'grey'} style={styles.icon} />
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            placeholder="user123@email.com"
            placeholderTextColor="black"
          />
        </View>
        {mailError ? <Text style={styles.errorText}>{mailError}</Text> : null}

        <View style={styles.inputContainer}>
          <Icon size={20} name={'unlock-alt'} color={'grey'} style={styles.icon} />
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            placeholder="PASSWORD"
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Icon
              name={!isPasswordVisible ? 'eye-slash' : 'eye'}
              size={20}
              color={isPasswordVisible ? 'grey' : 'black'}
            />
          </TouchableOpacity>
        </View>
        {passError ? <Text style={styles.errorText}>{passError}</Text> : null}

        <TouchableOpacity onPress={handleSubmit}>
          <LinearGradient
            style={styles.button}
            colors={['#FFA500', '#FF6347']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
          >
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>LOGIN</Text>
              <Icon size={20} name={'long-arrow-right'} color={'grey'} style={styles.icon2} />
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signupLinkText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  logoContainer: {
    flex: 0.2,

  },
  headerText: {
    color: 'black',
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 30,
  },
  subHeaderText: {
    marginLeft: 30,
    fontSize: 18,
  },
  icon: {
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 1,
    paddingHorizontal: 10,
    marginLeft: 30,
    backgroundColor: 'white',
    marginRight: 10,
    marginTop: 40,
    borderBottomColor: 'black',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderBlockStartColor: 'white',
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: 'white',
    backgroundColor: 'white',
    fontWeight: 'bold',
    marginRight: 3,
    fontSize: 15,
  },
  icon2: {
    marginRight: 10,
    color: 'white',
  },
  button: {
    backgroundColor: 'orange',
    borderRadius: 22,
    marginLeft: 232,
    padding: 11,
    marginEnd: 20,
    marginTop: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  signupContainer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    top: 190,
  },
  signupText: {
    textAlign: 'center',
  },
  signupLinkText: {
    color: 'orange',
    fontSize: 15,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    marginLeft: 40,
  },
  maincontainer:
  {
    top: 50,
  }
});

export default Login;
