import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    FlatList,
    ScrollView,
    Image, ImageBackground
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { addImage, removeImage,delImageHistory } from '../Redux/ImageSlice';
import { useState } from 'react';
import DelImageDisplay from './DelImageDisplay';
const ImageDisplay = () => {
    const navigation = useNavigation<any>();

    const images = useSelector((state: any) => state?.ImageSlice?.images);
    const Delimages = useSelector((state: any) => state?.ImageSlice?.delImages);
    console.log("xxxxxxxxxxxxxxxxxxxxxx",Delimages);
    console.log(images);
    
    const dispatch = useDispatch();
    const handelRemove = (id,name,desc,Url) => {

        dispatch(removeImage(id));
        dispatch(delImageHistory({imagename:name,imagedes:desc,imageUrl:Url}));
  
        console.log("xxxxxxxxxxxxxxxxxxxxxx",Delimages);
    };
    return (


        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>


            <FlatList
                data={images}
                style={{ padding: 16 }}
                renderItem={({ item }) =>

                    <View>
                        <Image
                            source={{ uri: item.imageUrl }}
                            style={{

                                height: 270,

                                borderRadius: 10,
                            }}
                        />
                        <View style={{ marginBottom: 20, marginVertical: -60 }}>
                            <View style={{ borderWidth: 10, borderRadius: 20, borderColor: 'white', backgroundColor: 'white', margin: 10 }}>
                                <Text style={{ fontSize: 15 }}> {item.imagename} </Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}> {item.imagedes} </Text>
                                    <TouchableOpacity style={{ backgroundColor: 'red', marginLeft: 80, marginRight: 10, borderRadius: 8, height: 25, width: 50 }} onPress={() => handelRemove(item.id,item.imagename,item.imagedes,item.imageUrl)}>
                                        <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>Delete</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                }

            />

        </View>


    );
};



const styles = StyleSheet.create({

});

export default ImageDisplay;