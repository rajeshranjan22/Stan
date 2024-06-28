import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import CustomButton from '../Components/CustomButton';
import TextInputField from '../Components/TextInputField';

const TextCaseConverter = () => {
    const [text, setText] = useState('');
    const [convertedText, setConvertedText] = useState('');

    const toLowerCase = () => setConvertedText(text.toLowerCase());
    const toUpperCase = () => setConvertedText(text.toUpperCase());
    const toTitleCase = () =>
        setConvertedText(
            text.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()))
        );

    const copyToClipboard = () => Clipboard.setString(convertedText);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Text Case Converter</Text>
            <TextInputField
                placeholder="Enter text here"
                value={text}
                onChangeText={setText}
                style={styles.input}
            />
            <View style={styles.buttonContainer}>
                <CustomButton title="Lowercase" onPress={toLowerCase} />
                <CustomButton title="Uppercase" onPress={toUpperCase} />
                <CustomButton title="Title Case" onPress={toTitleCase} />
            </View>
            {convertedText ? (
                <View style={styles.resultContainer}>
                    <Text style={styles.result}>Converted Text:</Text>
                    <Text style={styles.convertedText}>{convertedText}</Text>
                    <CustomButton title="Copy to Clipboard" onPress={copyToClipboard} />
                </View>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#D94496',
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
    },
    buttonContainer: {
        width: '70%',
        marginRight: 50,
        marginBottom: 20,
    },
    resultContainer: {
        alignItems: 'center',
    },
    result: {
        fontSize: 20,
        marginBottom: 10,
    },
    convertedText: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: '#007bff',
        borderRadius: 5,
        marginBottom: 10,
        textAlignVertical: 'center',
        minHeight: 40,
        width: '80%',
        textAlign: 'center',
    },
});

export default TextCaseConverter;
