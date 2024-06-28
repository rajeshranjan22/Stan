import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
    width: windowWidth * 0.8, 
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default CustomButton;
