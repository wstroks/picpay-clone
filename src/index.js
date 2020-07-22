import React from 'react';
import { Text, StatusBar } from 'react-native';
import Navigation from './Navigation';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <>
    <StatusBar barStyle='light-content' backgroundColor='#000'/>
    <NavigationContainer>
      <Navigation />

    </NavigationContainer>
    </>
    
  );
}

