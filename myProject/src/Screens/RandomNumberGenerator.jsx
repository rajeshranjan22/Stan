import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../Components/CustomButton';
import TextInputField from '../Components/TextInputField';

const RandomNumberGenerator = () => {
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    const [randomNumber, setRandomNumber] = useState(null);

    const generateRandomNumber = () => {
        const minValue = parseInt(min, 10);
        const maxValue = parseInt(max, 10);
        if (!isNaN(minValue) && !isNaN(maxValue) && minValue < maxValue) {
            const randomNum = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
            setRandomNumber(randomNum);
        } else {
            setRandomNumber('Invalid range');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Random Number Generator</Text>
            <TextInputField placeholder="Min" keyboardType="numeric" value={min} onChangeText={setMin} />
            <TextInputField placeholder="Max" keyboardType="numeric" value={max} onChangeText={setMax} />
            <CustomButton title="Generate" onPress={generateRandomNumber} />
            {randomNumber !== null && <Text style={styles.result}>Random Number: {randomNumber}</Text>}
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
    result: {
        marginTop: 20,
        fontSize: 20,
    },
});

export default RandomNumberGenerator;
