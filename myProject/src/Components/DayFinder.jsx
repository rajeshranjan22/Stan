import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const DayFinder = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [resultDay, setResultDay] = useState('');

  const findDay = () => {
    const date = new Date(`${year}-${month}-${day}`);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    setResultDay(days[date.getDay()]);
  };

  return (
    <View style={styles.container}>
      <Text>Enter Date:</Text>
      <TextInput
        style={styles.input}
        placeholder="Day"
        keyboardType="numeric"
        value={day}
        onChangeText={setDay}
      />
      <TextInput
        style={styles.input}
        placeholder="Month"
        keyboardType="numeric"
        value={month}
        onChangeText={setMonth}
      />
      <TextInput
        style={styles.input}
        placeholder="Year"
        keyboardType="numeric"
        value={year}
        onChangeText={setYear}
      />
      <Button title="Find Day" onPress={findDay} />
      {resultDay !== '' && <Text>Day: {resultDay}</Text>}
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

export default DayFinder;
