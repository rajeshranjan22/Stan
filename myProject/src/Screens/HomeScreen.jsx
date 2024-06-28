import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../Components/CustomButton';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Utility Tools</Text>
            <CustomButton title="Random Number Generator" onPress={() => navigation.navigate('RandomNumber')} />
            <CustomButton title="Timer Utility" onPress={() => navigation.navigate('Timer')} />
            <CustomButton title="Text Case Converter" onPress={() => navigation.navigate('TextCaseConverter')} />
            <CustomButton title="Day Finder" onPress={() => navigation.navigate('DayFinder')} />
            <CustomButton title="Date Difference Calculator" onPress={() => navigation.navigate('DateDifferenceCalculator')} />
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
});

export default HomeScreen;
