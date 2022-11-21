import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {HOME} from '../../routes/routes';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => navigation.navigate(HOME)}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
