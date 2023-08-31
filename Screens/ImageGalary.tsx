import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    FlatList,
    ScrollView,
    Image
} from 'react-native';
import { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { launchImageLibrary } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { addImage,removeImage,delimageHistory} from '../Redux/ImageSlice';
import { useNavigation } from '@react-navigation/native';
import DelImageDisplay from './DelImageDisplay';
import { Alert } from 'react-native';
const ImageGalary = () => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');
    const [selectImage, setSelectImage] = useState('');
    const dispatch = useDispatch();
    const images = useSelector((state: any) => state?.ImageSlice?.images);
    const Delimages = useSelector((state: any) => state?.ImageSlice?.Delimages);
    const navigation = useNavigation<any>();
    console.log(images);
    const HandelImage = () => {

        let options = {
            storageOptions: {
                path: 'image'
            },
        };

        launchImageLibrary(options, (response) => {

            setSelectImage(response.assets[0].uri)
        });
    };

    const imagesubmit = () => {
        if(name && desc && selectImage )
    {


        console.log(name, desc);
        console.log("lalsaldkakdskfkdskf", selectImage);
        dispatch(addImage({ imagename: name, imagedes: desc, imageUrl: selectImage }));
        console.log(name, desc);
        console.log('List', images);
        navigation.navigate('ImageDisplay');
    }
    else{
        Alert.alert("Please fill the input feilds");
    }
    };

    const imageHistory=()=>
    {
        navigation.navigate('DelImageDisplay');
    }
    return (


        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#ecf9f2' }}>
            <View style={{ flex: 0.3, justifyContent: 'space-between', paddingBottom: 100 }}>
                <Text style={{ color: '#006600', fontSize: 20, fontWeight: 'bold' }} >Enter Image Name:</Text>
                <TextInput
                    placeholder='Enter Image Name'
                    value={name}
                    onChangeText={(text) => setName(text)}
                    style={{ borderWidth: 2, borderRadius: 5, height: 40 }}
                />
                <Text style={{ color: '#006600', fontSize: 20, fontWeight: 'bold' }}>Enter Image Description:</Text>
                <TextInput
                    placeholder='Enter Image Description'
                    value={desc}
                    onChangeText={(text) => setDesc(text)}
                    style={{ borderWidth: 2, borderRadius: 5, height: 40 }}
                />
                <TouchableOpacity style={{ backgroundColor: '#006600', borderRadius: 6, marginLeft: 130, width: 90, height: 30, marginTop: 20, }} onPress={imagesubmit} >
                    <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 18 }}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#006600', borderRadius: 6, marginLeft: 120, width: 120, height: 20, marginTop: 20, }} onPress={imageHistory} >
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12,textAlign:'center' }}>Delete History</Text>
                </TouchableOpacity>
            </View>


            <View style={{ flex: 0.3, alignItems: 'center' }}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>Upload Files </Text>
                <Text style={{}}>Browse and select your files  </Text>
                <Text> you want to upload </Text>
                <TouchableOpacity onPress={HandelImage}>
                    <Icon size={50} name={'plus-circle'} color={'grey'} />
                </TouchableOpacity>
                <Image

style={{

    height: 120,
    width: 120,
    borderRadius: 65,
    top: 8,
  }}

                    source={{ uri: selectImage }}
                />
            </View>
           
        </View>


    );
};



const styles = StyleSheet.create({

});

export default ImageGalary;