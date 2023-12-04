/**
 * IMPORTS
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import {HomeView} from '../../presentation/screens/views/home';
import {SigninView} from '../../presentation/screens/views/signin';
import {RegisterUserView} from '../../presentation/screens/views/register-user';
import {SwipeListingView} from '../../presentation/screens/views/swipe-list';
import {FacialRecognitionView} from '../../presentation/screens/views/facial-recognition';

const Stack = createNativeStackNavigator();

const AppOpenRoutesStacks = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SigninView"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SigninView" component={SigninView} />
        <Stack.Screen name="RegisterUserView" component={RegisterUserView} />
        <Stack.Screen name="HomeView" component={HomeView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

/**
 * EXPORT
 */
export {AppOpenRoutesStacks};
