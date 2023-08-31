
import useAuthentication from '../Screens/Firebase/useAuthentication';
import firestore from '@react-native-firebase/firestore';
import React, { useState, useEffect } from 'react';
import storage from '@react-native-firebase/storage';
import DateTimePicker from '@react-native-community/datetimepicker';
import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StyleSheet,
  View, Text, TextInput, Image, TouchableOpacity, Alert, Button,ScrollView
} from 'react-native';

const userId = auth().currentUser?.uid;
import { launchImageLibrary } from 'react-native-image-picker';
import DatePicker from 'react-native-date-picker';
function Profile(): JSX.Element {
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [selectImage, setSelectImage] = useState('');
  const user = useAuthentication();

  
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState(new Date('09-10-2021'));

  // AsyncStorage.getItem('profileImageURL').then((url) => {
  //   if (url) {
  //     setSelectImage(url);
  //   }
  // });
  useEffect(() => {
    getDeviceToken();
  }, []);
  const getDeviceToken = async () => {
    let token = await messaging().getToken();
    console.log(token);
  };
  
  const ImagePicker = () => {

    let options = {
      storageOptions: {
        path: 'image'
      },
    };

    launchImageLibrary(options, (response) => {

      const reference = storage().ref(`users/${userId}/profileImage`);
      const pathToFile = response.assets[0].uri;


      reference.putFile(pathToFile).then(() => {

        reference.getDownloadURL().then((url) => {
          setSelectImage(url);
          // AsyncStorage.setItem('profileImageURL', url);
        }).catch((error) => {
          console.log('Error getting download URL:', error);
        });
      }).catch((error) => {
        console.log('Error uploading file:', error);
      });

    });
  };

  useEffect(() => {
    firestore()
      .collection('users')
      .doc(userId)
      .get()
      .then((documentSnapshot) => {

        if (documentSnapshot.exists) {
          const userData = documentSnapshot.data();
          setName(userData?.name);
          setGender(userData?.gender);
          setPhone(userData?.phone);
          setDob(userData?.dateofbirth);
          setSelectImage(userData?.imageUrl)
        } else {
          setName('');
          setGender('');
          setPhone('');
          setDob('');
        }
      });

  }, []);
  const handelsubmit = () => {
    console.log(selectImage);

    firestore()
      .collection('users')
      .doc(userId)
      .set({
        name: name,
        gender: gender,
        dateofbirth: dob,
        phone: phone,
        imageUrl: selectImage
      })

      .then(() => {
        if (name && dob && phone && gender) {
          Alert.alert("Updated Sucessfully")
        }
        else {

        }
      });

  }
  return (


    <View style={styles.flex}>
      <View style={styles.flex1}>

        <Image
          source={{ uri: selectImage }}

          style={{

            height: 120,
            width: 120,
            borderRadius: 65,
            top: 8,
          }}

        />
        <TouchableOpacity style={{ backgroundColor: "#841584", borderRadius: 8, padding: 3, top: 15 }} onPress={ImagePicker}>
          <Text style={{ color: 'white', fontSize: 18 }}>Upload</Text>

        </TouchableOpacity>
      </View>


      <View style={styles.flex2}>
        <View style={{ marginLeft: 20 }}>
          <Text>UserName </Text>
          <TextInput
            value={name}
            onChangeText={setName}
            style={styles.input}

          />

          <Text>Email</Text>
          <TextInput
            style={styles.input}
            value={user?.email}
            style={styles.input}

          />


          <Text>Phone</Text>
          <TextInput
            value={phone}
            onChangeText={
              (phone) => setPhone(phone)

            }
            style={styles.input}
          />


          <Text>Gender </Text>
          <TextInput
            value={gender}
            onChangeText={
              (gender) => setGender(gender)
            }
            style={styles.input}
          />

          <Text>Date of Birth </Text>
         
          <TextInput
           
            value={dob}
            onChangeText={
              (dob) => setDob(dob)
            }
            style={styles.input}
          />
          

        </View>
      </View>
      <View style={styles.flex3}>

        <TouchableOpacity style={{ borderRadius: 5, backgroundColor: 'blue', marginRight: 250, marginLeft: 10, left: 120, alignItems: 'center', height: 30, position: 'relative', top: 8 }} onPress={handelsubmit}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, alignItems: 'center', justifyContent: 'center' }}>Update</Text>
        </TouchableOpacity>


      </View>

    </View>
 
  );
}
const styles = StyleSheet.create({
  flex:
  {
    flex: 1,
    flexDirection: 'column',


  },
  flex1:
  {
    flex: 0.3,
    backgroundColor: '#00004d',
    alignItems: 'center',
  },
  flex2:
  {
    flex: 0.6,
    marginTop: 10,
    backgroundColor: '',
  },
  flex3:
  {
    flex: 0.1,
  },
  input:
  {
    fontWeight: 'bold',
    fontSize: 16,
    borderBottomWidth: 0.5,
  }

});
export default Profile;