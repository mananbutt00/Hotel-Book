import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';

function SignUp(): JSX.Element {
  const navigation = useNavigation<any>();
  const [isPassVisi, SetPassVisi] = useState(false);
  const [isConPassVisi, SetConPassVisi] = useState(false);
  const [email, setEmail] = useState('');
  const [conpass, setConPass] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passError, setPassError] = useState('');
  const [displayName, setDisplayName] = useState('');

  const handleNavigateToLogin = () => {
    navigation.navigate('Login');
  };

  const handleSignUp = async () => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password,);
      const user = userCredential.user;
      console.log('Successfully', user.email);
      Alert.alert('User Successfully Registered');
      
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  const validatepass = () => {
    if (password.length < 8) {
      setPassError("password must be greater than 8");
      return false;
    } else {
      if (password == conpass) {
        setPassError("");
        return true;
      }
      else {
        setPassError("Password must be matched");
        return false;
      }
    }
  };

  const validateemail = () => {
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Email Must Be valid");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const success = () => {
    const iscorrmail = validateemail();
    const iscorrpass = validatepass();

    if (iscorrpass && iscorrmail) {
      handleSignUp();
    }
  };

  const toggelpass = () => {
    SetPassVisi(!isPassVisi);
  };

  const toggelpass2 = () => {
    SetConPassVisi(!isConPassVisi);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>

      </View>
      <Text></Text>
      <View style={styles.formContainer}>
        <Text style={styles.headerText}>Create Account</Text>
        <View style={styles.inputContainer}>
          <Icon size={20} name={'user-o'} color={'grey'} style={styles.icon} />
          <TextInput
            style={styles.input}
            value={displayName}
            onChangeText={setDisplayName}
            placeholder="Jhone williams"
            placeholderTextColor="black"
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon size={20} name={'envelope-o'} color={'grey'} style={styles.icon} />
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            placeholder="Email"
          />
        </View>
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        <View style={styles.inputContainer}>
          <Icon size={20} name={'unlock-alt'} color={'grey'} style={styles.icon} />
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            placeholder="PASSWORD"
            secureTextEntry={!isPassVisi}
          />
          <TouchableOpacity onPress={toggelpass}>
            <Icon
              name={!isPassVisi ? 'eye-slash' : 'eye'}
              color={isPassVisi ? 'grey' : 'black'}
              size={20}
            />
          </TouchableOpacity>
        </View>
        {passError ? <Text style={styles.errorText}>{passError}</Text> : null}
        <View style={styles.inputContainer}>
          <Icon size={20} name={'unlock-alt'} color={'grey'} style={styles.icon} />
          <TextInput
            value={conpass}
            onChangeText={setConPass}
            style={styles.input}
            placeholder="CONFIRM PASSWORD"
            secureTextEntry={!isConPassVisi}
          />
          <TouchableOpacity onPress={toggelpass2}>
            <Icon
              name={!isConPassVisi ? 'eye-slash' : 'eye'}
              color={isConPassVisi ? 'grey' : 'black'}
              size={20}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={success}>
          <LinearGradient
            style={styles.button}
            colors={['#FFA500', '#FF6347']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
          >
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>SignUp</Text>
              <Icon size={20} name={'long-arrow-right'} color={'grey'} style={styles.icon2} />
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Already Have an Account?</Text>
        <TouchableOpacity onPress={handleNavigateToLogin}>
          <Text style={styles.signupLinkText}>Sign in</Text>
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
    flex: 0.1,

  },
  formContainer: {
    flex: 0.8,
    top: -30,
  },
  headerText: {
    color: 'black',
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.4,
    borderRadius: 1,
    paddingHorizontal: 10,
    marginLeft: 30,
    marginRight: 10,
    marginTop: 30,
    borderBottomColor: 'black',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderBlockStartColor: 'white',
    shadowColor: "black",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
  },
  input: {
    flex: 1,
    height: 50,
    fontWeight: 'bold',
    marginRight: 3,
    fontSize: 13,
  },
  icon: {
    marginRight: 10,
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
    flex: 0.08,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    textAlign: 'center',
    top: 10,
  },
  signupLinkText: {
    color: 'orange',
    fontSize: 15,
    textAlign: 'center',
    top: 10,
  },
  errorText: {
    color: 'red',
    marginLeft: 40,
  },
});

export default SignUp;
