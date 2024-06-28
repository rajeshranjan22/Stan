import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../Components/CustomButton';
import TextInputField from '../Components/TextInputField';

const DayFinder = () => {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [dayOfWeek, setDayOfWeek] = useState('');

    const findDayOfWeek = () => {
        const date = new Date(year, month - 1, day);
        if (!isNaN(date)) {
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            setDayOfWeek(days[date.getDay()]);
        } else {
            setDayOfWeek('Invalid date');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Day Finder</Text>
            <TextInputField placeholder="Day" keyboardType="numeric" value={day} onChangeText={setDay} />
            <TextInputField placeholder="Month" keyboardType="numeric" value={month} onChangeText={setMonth} />
            <TextInputField placeholder="Year" keyboardType="numeric" value={year} onChangeText={setYear} />
            <CustomButton title="Find Day" onPress={findDayOfWeek} />
            {dayOfWeek ? <Text style={styles.result}>Day of the Week: {dayOfWeek}</Text> : null}
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

export default DayFinder;
