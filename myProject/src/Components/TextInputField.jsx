import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TextInputField = ({ placeholder, value, onChangeText, keyboardType = 'default' }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      placeholderTextColor="#ccc"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '85%',
    height: 50,
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
});

export default TextInputField;
