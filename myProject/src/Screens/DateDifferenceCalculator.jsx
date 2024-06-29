import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import CustomButton from '../Components/CustomButton';

const DateDifferenceCalculator = () => {
  const [day1, setDay1] = useState('');
  const [month1, setMonth1] = useState('');
  const [year1, setYear1] = useState('');
  const [day2, setDay2] = useState('');
  const [month2, setMonth2] = useState('');
  const [year2, setYear2] = useState('');
  const [difference, setDifference] = useState('');

  const isValidDate = (day, month, year) => {
    const dayNum = parseInt(day, 10);
    const monthNum = parseInt(month, 10);
    const yearNum = parseInt(year, 10);

    if (isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
      return 'Invalid month';
    }

    if (isNaN(dayNum) || isNaN(yearNum) || dayNum < 1 || dayNum > 31) {
      return 'Invalid date';
    }

    const date = new Date(yearNum, monthNum - 1, dayNum);
    if (date.getFullYear() !== yearNum || date.getMonth() + 1 !== monthNum || date.getDate() !== dayNum) {
      return 'Invalid date';
    }

    return null;
  };

  const calculateDifference = () => {
    const error1 = isValidDate(day1, month1, year1);
    const error2 = isValidDate(day2, month2, year2);

    if (error1) {
      setDifference(error1);
      return;
    }

    if (error2) {
      setDifference(error2);
      return;
    }

    const date1 = new Date(year1, month1 - 1, day1);
    const date2 = new Date(year2, month2 - 1, day2);
    const timeDiff = Math.abs(date2 - date1);
    const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    setDifference(`${dayDiff} days`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Date Difference Calculator</Text>
      <View style={styles.dateInputs}>
        <Text style={styles.label}>Enter First Date:</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="DD"
            keyboardType="numeric"
            value={day1}
            onChangeText={setDay1}
          />
          <TextInput
            style={styles.input}
            placeholder="MM"
            keyboardType="numeric"
            value={month1}
            onChangeText={setMonth1}
          />
          <TextInput
            style={styles.input}
            placeholder="YYYY"
            keyboardType="numeric"
            value={year1}
            onChangeText={setYear1}
          />
        </View>
        <Text style={styles.label}>Enter Second Date:</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="DD"
            keyboardType="numeric"
            value={day2}
            onChangeText={setDay2}
          />
          <TextInput
            style={styles.input}
            placeholder="MM"
            keyboardType="numeric"
            value={month2}
            onChangeText={setMonth2}
          />
          <TextInput
            style={styles.input}
            placeholder="YYYY"
            keyboardType="numeric"
            value={year2}
            onChangeText={setYear2}
          />
        </View>
      </View>
      <CustomButton title="Calculate Difference" onPress={calculateDifference} />
      {difference !== '' && <Text style={styles.result}>Difference: {difference}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D94496',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  dateInputs: {
    marginBottom: 20,
    marginTop: 20,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default DateDifferenceCalculator;
