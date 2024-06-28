import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Clipboard } from 'react-native';

const TextCaseConverter = () => {
  const [text, setText] = useState('');
  const [convertedText, setConvertedText] = useState('');

  const toLowerCase = () => {
    setConvertedText(text.toLowerCase());
  };

  const toUpperCase = () => {
    setConvertedText(text.toUpperCase());
  };

  const toTitleCase = () => {
    setConvertedText(
      text
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    );
  };

  const copyToClipboard = () => {
    Clipboard.setString(convertedText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter text"
        value={text}
        onChangeText={setText}
      />
      <Button title="To Lowercase" onPress={toLowerCase} />
      <Button title="To Uppercase" onPress={toUpperCase} />
      <Button title="To Title Case" onPress={toTitleCase} />
      <Button title="Copy to Clipboard" onPress={copyToClipboard} />
      {convertedText !== '' && <Text>Converted Text: {convertedText}</Text>}
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

export default TextCaseConverter;
