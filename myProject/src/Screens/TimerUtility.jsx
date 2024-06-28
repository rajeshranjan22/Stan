import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../Components/CustomButton';
import TextInputField from '../Components/TextInputField';

const TimerUtility = () => {
    const [time, setTime] = useState('');
    const [initialTime, setInitialTime] = useState(0); 
    const [remainingTime, setRemainingTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isRunning && remainingTime > 0) {
            intervalRef.current = setInterval(() => {
                setRemainingTime((prev) => {
                    if (prev <= 0) {
                        clearInterval(intervalRef.current);
                        setIsRunning(false);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        } else if (remainingTime === 0) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
        }

        return () => clearInterval(intervalRef.current);
    }, [isRunning, remainingTime]);

    const startTimer = () => {
        const totalSeconds = parseInt(time, 10);
        if (!isNaN(totalSeconds) && totalSeconds > 0) {
            if (!isRunning) {
                const startTime = remainingTime > 0 ? remainingTime : totalSeconds;
                setInitialTime(startTime);
                setRemainingTime(startTime);
            }
            setIsRunning(true);
        }
    };

    const pauseTimer = () => {
        setIsRunning(false);
        clearInterval(intervalRef.current);
    };

    const stopTimer = () => {
        setIsRunning(false);
        setInitialTime(0); 
        setRemainingTime(0);
        clearInterval(intervalRef.current);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Timer Utility</Text>
            <TextInputField placeholder="Set Time (seconds)" keyboardType="numeric" value={time} onChangeText={setTime} />
            <View style={styles.buttonContainer}>
                <CustomButton title="Start" onPress={startTimer} />
                <CustomButton title="Pause" onPress={pauseTimer} />
                <CustomButton title="Stop" onPress={stopTimer} />
            </View>
            <Text style={styles.timer}>{remainingTime} seconds</Text>
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
    buttonContainer: {
        width: '80%',
        marginBottom: 20,
        marginRight: 20,
    },
    timer: {
        fontSize: 48,
    },
});

export default TimerUtility;
