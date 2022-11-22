/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {swapTheme} from '../../../features/theme/theme.slice';

const Home = () => {
  const dispatch = useDispatch();
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
        Home
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
          try {
            theme.theme === 'ligth'
              ? dispatch(swapTheme('dark'))
              : dispatch(swapTheme('ligth'));
          } catch (error) {
            console.log('Error: ', error);
          }
        }}>
        <Text
          style={{
            color: theme.theme === 'ligth' ? theme.ligth.text : theme.dark.text,
          }}>
          Change theme
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
export default Home;
