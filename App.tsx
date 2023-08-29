import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/components/Home';
import Gallery from './src/components/Gallery';
import Tester from './src/components/Tester';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="Tester" component={Tester} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
