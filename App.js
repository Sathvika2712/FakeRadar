import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import all screens
import Landing1 from './screens/Landing1';
import Landing2 from './screens/Landing2';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import VideoScreen from './screens/VideoScreen';
import ImagesScreen from './screens/ImagesScreen';
import TextsScreen from './screens/TextsScreen';
import UploadScreen from './screens/UploadScreen';
import ResultScreen from './screens/ResultScreen';
import AudioScreen from './screens/AudioScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landing1"
        screenOptions={{
          headerShown: false, // We'll create our own headers in each screen if needed
        }}
      >
        <Stack.Screen name="Landing1" component={Landing1} />
        <Stack.Screen name="Landing2" component={Landing2} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="VideoScreen" component={VideoScreen} />
        <Stack.Screen name="ImagesScreen" component={ImagesScreen} />
        <Stack.Screen name="TextsScreen" component={TextsScreen} />
        <Stack.Screen name="UploadScreen" component={UploadScreen} />
        <Stack.Screen name="ResultScreen" component={ResultScreen} />
        <Stack.Screen name="AudioScreen" component={AudioScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
