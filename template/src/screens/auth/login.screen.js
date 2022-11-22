/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ROUTE_APP} from '../../routes/routes';
import {useDispatch, useSelector} from 'react-redux';
import {authThunk} from '../../features/auth/auth.actions';

const Login = () => {
  const navigation = useNavigation();
  const theme = useSelector(state => state.theme);

  return (
    <View
      style={[
        style.view,
        {
          backgroundColor:
            theme.theme === 'ligth'
              ? theme.ligth.backgroundColor
              : theme.dark.backgroundColor,
        },
      ]}>
      <Text
        style={{
          color: theme.theme === 'ligth' ? theme.ligth.text : theme.dark.text,
        }}>
        Login
      </Text>
      <TouchableOpacity
        style={{
          padding: 10,
          borderRadius: 5,
          backgroundColor:
            theme.theme === 'ligth'
              ? theme.ligth.colorMain
              : theme.dark.colorMain,
        }}
        onPress={() => {
          navigation.navigate(ROUTE_APP);
          // dispatch(authThunk());
        }}>
        <Text
          style={{
            color: theme.theme === 'ligth' ? theme.ligth.text : theme.dark.text,
          }}>
          Home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Login;
