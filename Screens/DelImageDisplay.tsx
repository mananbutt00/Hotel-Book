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
import { useState } from 'react';
const DelImageDisplay = () => {
    const navigation = useNavigation<any>();
    const Delimages = useSelector((state: any) => state?.ImageSlice?.delImages);
    
   
    return (


        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>


            <FlatList
                data={Delimages}
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

export default DelImageDisplay;