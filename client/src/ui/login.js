import React, {useState} from 'react';
import {View} from 'react-native';

import {InputBox, MainButton} from '../components';
import {LoginStyles} from '../theme';

import { useGlobalState } from '../state/global';

export default LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState(() => '');
  const [password, setPassword] = useState(() => '');

  const {state: {theme}}  = useGlobalState();
  console.log('Global Theme @ Login Component ::', theme);

  const performLogin = async () => {
    // implement login validation for User/Password

    // later add social login

    // perform a nagivation for now
    navigation.navigate('Home');
  }

  console.log('Login Style Board :: ', LoginStyles.board);
  console.log('Login Style Button :: ', LoginStyles.buttons);

  return (
    <View>
      <View style={LoginStyles.board}>
        <InputBox label="Email" text={email} setText={text => setEmail(text)} />
        <InputBox
          label="Password"
          text={password}
          setText={text => setPassword(text)}
          secure={true}
        />
      </View>
      <View style={LoginStyles.buttons}>
        <MainButton text="Sign Up" 
          onPress={() => navigation.navigate('Signup')} // navigate to sigun page
        />
        <MainButton text="Login" onPress={performLogin} />
      </View>
    </View>
  );
}