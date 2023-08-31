
import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
  Image,
 TouchableOpacity,
 ImageBackground,
} from 'react-native';

import {
  Colors,

} 
from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native'
function BookingScreen(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation<any>();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    
    <SafeAreaView style={backgroundStyle}>
      
<ImageBackground

source={require('../Images/images/Cover_Img.jpg')}
imageStyle={{
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
   
    width:'100%',
    height:'70%',

}}
>
<View  style={{flexDirection:'column',alignItems:'flex-end',justifyContent:'space-between',top:10,marginRight:10,}}>
   
   <Image
     style={styles.covimg_style}
     source={require('../Images/images/Cover_Img.jpg')}
   />
    <Image
     style={styles.covimg_style1}
     source={require('../Images/images/hotel1.jpg')}
   />
    <Image
     style={styles.covimg_style2}
     source={require('../Images/images/hotel2.jpg')}
   />


</View>

<Text style={{fontSize:20,fontWeight:'bold',color:'white',top:-40,left:10,}}>Paradise Resort</Text>
<Text style={{fontSize:14,color:'white',top:-30,left:10,}}>Pantai Weacicu,Labuan Bajo,Kec,</Text>
<Text style={{fontSize:14,color:'white',top:-28,left:10,}}>Komodo,Kabupaten Manggarai</Text>
<Text style={{fontSize:14,color:'white',top:-26,left:10,}}>Barat,Nusa Tenggara Tim ,86554</Text>
</ImageBackground>
<Text style={{color:'black',fontWeight:'bold',fontSize:20,top:-130,marginLeft:10,}}>
    About US
</Text>
<Text style={{color:'black',fontSize:16,top:-120,marginLeft:10,}}>
Welcome to resort paradise the best service during your stay in bali with an emphasis on customer comfort
.Enjoy Balinese specialies,dance and music every the facilities at aur resort
</Text>
<Text style={{color:'black',fontWeight:'bold',fontSize:20,bottom:120,marginLeft:10,}}>
   Services & Facilities 
</Text>
<View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'space-between',bottom:120,marginLeft:10,}}>
<Text > Swimming Pool</Text>  
<Text style={{marginRight:50,}}>4 Rooms</Text>  
</View>
<View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'space-between',bottom:120,marginLeft:10,}}>
<Text > Parking area</Text>  
<Text style={{marginRight:70,}}>Bars</Text>  
</View>
<View style={{flexDirection:'column',alignItems:'flex-start',bottom:110,marginLeft:10,}}>
  <View style={{backgroundColor:'white',bottom:10}}> 
<Text >Price estimate </Text>  

<Text style={{fontWeight:'bold',fontSize:18}} >$480/night </Text>  

 <TouchableOpacity style={{ backgroundColor:'blue',padding:5,borderRadius:10,bottom:30,marginLeft:250,}}  onPress={()=> navigation.navigate('Counter')} >

    <Text style={{color:'white',fontWeight:'bold'}}>Reverse Order </Text>
 </TouchableOpacity>
 </View> 
</View>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
   
    covimg_style:
    {
        width:'15%',
        height:'18%',
        borderRadius:8,
        top:130,
        borderColor:'white',
       
    },
    covimg_style1:
    {
width:'15%',
height:'18%',
borderRadius:8,

top:90,
    },
    covimg_style2:
    {
        width:'15%',
        height:'18%',
        borderRadius:8,
        top:50,
    },
});

export default BookingScreen;
