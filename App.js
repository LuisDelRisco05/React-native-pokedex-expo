import 'react-native-gesture-handler';
import React from 'react';
import { AuthProvider } from "./src/context/AuthContext";

import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </AuthProvider>
    
  )
}