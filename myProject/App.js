import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen';
import RandomNumberGenerator from './src/Components/RandomNumberGenerator';
import TimerUtility from './src/Components/TimerUtility';
import TextCaseConverter from './src/Components/TextCaseConverter';
import DayFinder from './src/Components/DayFinder';
import DateDifferenceCalculator from './src/Components/DateDifferenceCalculator';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Random Number Generator" component={RandomNumberGenerator} />
        <Stack.Screen name="Timer Utility" component={TimerUtility} />
        <Stack.Screen name="Text Case Converter" component={TextCaseConverter} />
        <Stack.Screen name="Day Finder" component={DayFinder} />
        <Stack.Screen name="Date Difference Calculator" component={DateDifferenceCalculator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
