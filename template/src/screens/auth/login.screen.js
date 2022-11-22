import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ROUTE_APP} from '../../routes/routes';
import {useDispatch} from 'react-redux';
import {authThunk} from '../../features/auth/auth.actions';

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ROUTE_APP);
          dispatch(authThunk());
        }}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
