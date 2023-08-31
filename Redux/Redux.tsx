import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import {addTodo,removeTodo} from './TodoSlice';
import Icon from 'react-native-vector-icons/FontAwesome';
const Redux = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state?.todo?.todos);

  const onChangeHandler = (t: string) => {
    setText(t);
  };

  const addTodoHandler = () => {
    dispatch(addTodo(text));
    console.log('List', todos);
  };

  const handleTodoDone = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    // <ScrollView>
    <SafeAreaView style={styles.maincontainer}>
      <View style={styles.container1}>
        <Text style={{fontSize: 30, textAlign: 'center', fontWeight: 'bold',color:'black',marginTop:50}}>
          React Todo App
        </Text>
      </View>
      <View style={styles.container2}>
        <View style={{flexDirection: 'row',marginTop:20}}>
          <TextInput
            onChangeText={text => onChangeHandler(text)}
            value={text}
            placeholder="Enter Something"
            style={styles.input}></TextInput>
          <TouchableOpacity style={styles.addbutton} onPress={addTodoHandler}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
              }}>
              Add
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={todos}
          renderItem={({item}) =>
          <View style={{backgroundColor:'#f2edf1'}}>
          <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#f2edf1'}}>
          <Text>{item.text}</Text>

          <TouchableOpacity onPress={() => handleTodoDone(item.id)}>
          <Icon size={20} name={'times'} color={'red'} />
          </TouchableOpacity>
          
          </View>
         
         <View style={{borderBottomWidth:1,padding:6,}}></View>
         </View>
        }
          keyExtractor={item => item.id}
         
        />
      </View>
    </SafeAreaView>
    // </ScrollView>
  );
};

export default Redux;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  
  },
  container1: {

    justifyContent: 'center',
  },
  container2: {
    padding: 14,
  },
  input: {
    borderColor: 'black',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    fontSize: 15,
    paddingLeft: 10,
    width: 280,
    borderRadius: 3,

    
  },
  addbutton: {
    backgroundColor: 'green',
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -5,
    borderRadius: 5,
  },
});