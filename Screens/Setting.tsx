import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList,ScrollView,Image} from 'react-native';
import axios from "axios";
import { RefreshControl, TouchableOpacity } from 'react-native-gesture-handler';


const Setting = () => {
  const [advice, setAdvice] = useState([]);
const [refresh,setRefresh]=useState(false);
  const getAdvice = () => {
    axios.get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setAdvice(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const pullMe=()=>
  {
    setRefresh(true)

    setTimeout(()=>
    {
      setRefresh(false)
    },3000)
  }

  return (
    
    <View style={styles.container}>
      <ScrollView refreshControl={
<RefreshControl
refreshing={refresh}
onRefresh={()=>pullMe()}
      />
    }>
      <Button title="GetData" onPress={getAdvice} color="green" />
      <Text style={{color:'black',fontWeight:'bold',fontSize:30}}>Countries</Text>
{/* <View style={{flexDirection:'row'}}> */}
      <FlatList
        data={advice}
        renderItem={({ item }) =>    

        <View style={{flex:1,justifyContent:'space-between',flexDirection:'column',margin:6}}>

        <Text style={{fontSize: 16,color:'red'}}>Name :</Text>
        <Text style={{fontSize: 16,}}>{item.name.common}</Text> 

<Text style={{fontSize: 16,color:'red'}}>Capital :</Text>
<Text style={{fontSize: 16,}}>{item.capital}</Text> 
<Text style={{fontSize: 16,color:'red'}}> Region :</Text>  
<Text style={{fontSize: 16,}}>{item.region}</Text> 
<Text style={{fontSize: 16,color:'red'}}> Translation :</Text>  
<Text>{item.translations.ara.official}</Text>
<Text style={{fontSize: 16,color:'red'}}> Flag :</Text>  
<Image source={{
          uri: item.flags.png,
        }} 
        style={{ width: 60, height: 40,}}
        />
<View style={{borderWidth:1,borderRadius:2,marginTop:6}}></View>


        </View>
      }
      />

{/* <FlatList
        data={advice}
        renderItem={({ item }) => 
        <Image source={{
          uri: item.flags.png,
        }} 
        style={{ width: 40, height: 20,margin:6}}
        />
      }
      /> */}

{/* </View> */}
      {/* <Text style={{color:'black',fontWeight:'bold',fontSize:30}}>Capitals</Text>
      <FlatList
        data={advice}
        renderItem={({ item }) =><Text >{item.capital}</Text>}
        keyExtractor={(item) => item.cca3}
      />


      <Text style={{color:'black',fontWeight:'bold',fontSize:30}}>Translations</Text>

      <FlatList
        data={advice}
        renderItem={({ item }) => <Text>{item.translations.ara.official}</Text>}
        keyExtractor={(item) => item.cca3}
        
      /> */}
 </ScrollView>
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Setting;
