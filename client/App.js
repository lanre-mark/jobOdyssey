import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as PaperProvider} from 'react-native-paper';
import {StatusBar} from 'react-native';

import {AppTheme} from './src/theme';
import {HomeScreen, LoginScreen, SignupScreen} from './src/ui';
import {GlobalProvider, useGlobalState} from './src/state/global';


// this is a stag of all screens
// the screens will be popped and pushed based on user's actions
const Stack = createStackNavigator();

const validateTheme = () => {
  // const {state: {theme}}  = useGlobalState();
  const {state}  = useGlobalState();
  const baseColor = state ? state.theme.primary : "#7f00ff"
  console.log('Global Theme @ App Component ::', baseColor);
  return baseColor; //theme.primary
}

const App = () => {  
  return (
    <GlobalProvider>
      <StatusBar
          backgroundColor={validateTheme()}
          barStyle="light-content"
      />
      <PaperProvider theme={AppTheme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                title: 'Log In',
                headerStyle: {
                  backgroundColor: '#aed581',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen
              name="Signup"
              component={SignupScreen}
              options={{
                title: 'Sign Up',
                headerStyle: {
                  backgroundColor: '#aed581',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: 'Jobs....',
                headerStyle: {
                  backgroundColor: '#aed581',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </GlobalProvider>
  )
}

export default App;
