
import React from 'react';
import { Settings } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

const Share = () => {



  return (
    <View style={styles.container}>
      <Text style={{color:'blue',fontSize:20,fontWeight:'bold'}}>Share Screen</Text>
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

export default Share;
