import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const RandomNumberGenerator = () => {
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const minNum = parseInt(min);
    const maxNum = parseInt(max);
    if (!isNaN(minNum) && !isNaN(maxNum) && minNum <= maxNum) {
      const result = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
      setRandomNumber(result);
    } else {
      setRandomNumber('Invalid input');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Min"
        keyboardType="numeric"
        value={min}
        onChangeText={setMin}
      />
      <TextInput
        style={styles.input}
        placeholder="Max"
        keyboardType="numeric"
        value={max}
        onChangeText={setMax}
      />
      <Button title="Generate" onPress={generateRandomNumber} />
      {randomNumber !== null && <Text>Random Number: {randomNumber}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default RandomNumberGenerator;
