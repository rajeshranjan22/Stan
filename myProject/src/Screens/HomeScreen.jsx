import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Utility Tools</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Random Number Generator')}
      >
        <Text style={styles.buttonText}>Random Number Generator</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Timer Utility')}
      >
        <Text style={styles.buttonText}>Timer Utility</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Text Case Converter')}
      >
        <Text style={styles.buttonText}>Text Case Converter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Day Finder')}
      >
        <Text style={styles.buttonText}>Day Finder</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Date Difference Calculator')}
      >
        <Text style={styles.buttonText}>Date Difference Calculator</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D94496',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default HomeScreen;
