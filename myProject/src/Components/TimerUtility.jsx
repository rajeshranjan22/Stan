import React, { useState, useRef } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const TimerUtility = () => {
  const [time, setTime] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(null);
  const timerRef = useRef(null);

  const startTimer = () => {
    const totalTime = parseInt(time) * 1000;
    if (!isNaN(totalTime) && totalTime > 0) {
      setIsRunning(true);
      setRemainingTime(totalTime);
      timerRef.current = setInterval(() => {
        setRemainingTime(prevTime => {
          if (prevTime <= 1000) {
            clearInterval(timerRef.current);
            setIsRunning(false);
            return 0;
          }
          return prevTime - 1000;
        });
      }, 1000);
    }
  };

  const pauseTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    }
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setIsRunning(false);
    setRemainingTime(null);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Time in seconds"
        keyboardType="numeric"
        value={time}
        onChangeText={setTime}
        editable={!isRunning}
      />
      <Button title="Start" onPress={startTimer} disabled={isRunning} />
      <Button title="Pause" onPress={pauseTimer} disabled={!isRunning} />
      <Button title="Stop" onPress={stopTimer} />
      {remainingTime !== null && <Text>Remaining Time: {remainingTime / 1000}s</Text>}
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

export default TimerUtility;
