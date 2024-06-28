import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const DateDifferenceCalculator = () => {
  const [day1, setDay1] = useState('');
  const [month1, setMonth1] = useState('');
  const [year1, setYear1] = useState('');
  const [day2, setDay2] = useState('');
  const [month2, setMonth2] = useState('');
  const [year2, setYear2] = useState('');
  const [difference, setDifference] = useState('');

  const calculateDifference = () => {
    const date1 = new Date(`${year1}-${month1}-${day1}`);
    const date2 = new Date(`${year2}-${month2}-${day2}`);
    const timeDiff = Math.abs(date2 - date1);
    const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    setDifference(`${dayDiff} days`);
  };

  return (
    <View style={styles.container}>
      <Text>Enter First Date:</Text>
      <TextInput
        style={styles.input}
        placeholder="Day"
        keyboardType="numeric"
        value={day1}
        onChangeText={setDay1}
      />
      <TextInput
        style={styles.input}
        placeholder="Month"
        keyboardType="numeric"
        value={month1}
        onChangeText={setMonth1}
      />
      <TextInput
        style={styles.input}
        placeholder="Year"
        keyboardType="numeric"
        value={year1}
        onChangeText={setYear1}
      />
      <Text>Enter Second Date:</Text>
      <TextInput
        style={styles.input}
        placeholder="Day"
        keyboardType="numeric"
        value={day2}
        onChangeText={setDay2}
      />
      <TextInput
        style={styles.input}
        placeholder="Month"
        keyboardType="numeric"
        value={month2}
        onChangeText={setMonth2}
      />
      <TextInput
        style={styles.input}
        placeholder="Year"
        keyboardType="numeric"
        value={year2}
        onChangeText={setYear2}
      />
      <Button title="Calculate Difference" onPress={calculateDifference} />
      {difference !== '' && <Text>Difference: {difference}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default DateDifferenceCalculator;
