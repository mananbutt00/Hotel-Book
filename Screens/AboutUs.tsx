
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const AboutUs = () => {
  const [input, setInput] = useState('');
  const [letterCombinations, setLetterCombinations] = useState<string[]>([]);
  const digitToLetters: { [key: string]: string } = {
    '1': '',
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };
  const getAllLetterCombinations = (digits: string): string[] => {
    if (!digits) return [];

    const combinations: string[] = [''];

    for (const digit of digits) {
      const letters = digitToLetters[digit];
      if (!letters) continue;

      const newCombinations: string[] = [];

      for (const combination of combinations) {
        for (const letter of letters) {
          newCombinations.push(combination + letter);
        }
      }

      combinations.length = 0;
      combinations.push(...newCombinations);
    }

    return combinations;
  };

  const handlePress = () => {
    const result = getAllLetterCombinations(input);
    setLetterCombinations(result);
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: 'black', marginBottom: 10, marginLeft: 10, fontWeight: 'bold', fontSize: 15 }}>Please Enter Input </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>

        <TextInput
          style={styles.input1}
          value={input}
          onChangeText={setInput}
          keyboardType="numeric"
          placeholder="enter text here!!"
        />
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={handlePress}>
        <View style={styles.button}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Submit</Text>
        </View>
      </TouchableOpacity>
      <Text style={{ color: 'black', marginBottom: 10, marginLeft: 10, fontWeight: 'bold', fontSize: 30, paddingLeft: 60, top: 20 }}>Combinations</Text>
      <View style={{ top: 50 }}>
        {letterCombinations.map((combination, index) => (
          <Text key={index}>{combination}</Text>
        ))}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  input1: {
    height: 40,
    padding: 10,
    borderRadius: 2,
    borderColor: 'black',
    borderWidth: 3
  },
  container: {
    margin: 10,
    marginTop: 50,
  },
  icon: {
    position: 'absolute',
    left: 320,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 15,
    padding: 10,
  },
});

export default AboutUs;
