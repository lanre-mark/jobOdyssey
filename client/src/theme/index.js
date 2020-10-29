import {DefaultTheme} from 'react-native-paper';
import {StyleSheet} from 'react-native';

import { useGlobalState } from '../state/global';

export const GlobalTheme = {
  light: {
    primary: '#7f00ff',
    accent: '#ffff01',
    error: '#D2473C',
    success: '#40e6b3',
    text: '#000000',
    grey1: '#edeced',
    grey2: '#c5c9cb',
    grey3: '#555a5e',
    grey4: '#333537',
    background: '#ffffff',
  },
  dark: {
    primary: '#7f00ff',
    accent: '#ffff01',
    error: '#D2473C',
    success: '#40e6b3',
    text: '#ffffff',
    grey1: '#edeced',
    grey2: '#46494c', 
    grey3: '#686e73',
    grey4: '#c5c9cb',
    background: '#000000',
  },
}

export const AppTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#aed581',
    accent: '#e1ffb1',
  },
};

export const HomeStyles = StyleSheet.create(() => ({
  board: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
}));

const generateLoginStyles = () => {

  // const {state: {theme}}  = useGlobalState();
  // console.log('Global Theme @ ThemeGeneration ::', theme);

  return {
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    buttons: {
      justifyContent: 'space-around',
      flexDirection: 'row',
    },
    board: {
      justifyContent: 'space-between',
      flexDirection: 'column',
      padding: 10,
    },
    input: {
      margin: 10,
    },
  }
}
export const LoginStyles = StyleSheet.create(generateLoginStyles());

export const SignupStyles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  buttons: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  board: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: 10,
  },
  input: {
    margin: 10,
  },
});