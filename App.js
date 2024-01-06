import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ShowScreen from './src/screens/ShowScreen.js';
import RegisterScreen from './src/screens/RegisterScreen.js';

import { useFonts, Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loadedFont] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratSemiBold": Montserrat_600SemiBold,
    "MontserratBold": Montserrat_700Bold
  });

  if (!loadedFont) {
    return <View />
  } else {
    return <NavigationContainer>
      <StatusBar />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ShowScreen}
          options={{ title: 'Meeting', headerStyle: { backgroundColor: '#427D9D' }, headerTintColor: '#DDF2FD', statusBarColor: '#164863', navigationBarColor: '#164863' }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Register Suppliers', headerStyle: { backgroundColor: '#427D9D' }, headerTintColor: '#DDF2FD', statusBarColor: '#164863', navigationBarColor: '#164863' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  }
}
