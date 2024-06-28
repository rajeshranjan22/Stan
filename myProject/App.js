import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen';
import RandomNumberGenerator from './src/Screens/RandomNumberGenerator';
import TimerUtility from './src/Screens/TimerUtility';
import TextCaseConverter from './src/Screens/TextCaseConverter';
import DayFinder from './src/Screens/DayFinder';
import DateDifferenceCalculator from './src/Screens/DateDifferenceCalculator';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RandomNumber" component={RandomNumberGenerator} />
        <Stack.Screen name="Timer" component={TimerUtility} />
        <Stack.Screen name="TextCaseConverter" component={TextCaseConverter} />
        <Stack.Screen name="DayFinder" component={DayFinder} />
        <Stack.Screen name="DateDifferenceCalculator" component={DateDifferenceCalculator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
