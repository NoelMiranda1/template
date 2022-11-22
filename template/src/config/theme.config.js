/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {swapTheme} from '../features/theme/theme.slice';

const getInitialTheme = async () => {
  try {
    const value = await AsyncStorage.getItem('@theme');

    if (value !== null) {
      // value previously stored
      return value;
    } else {
      return 'ligth';
    }
  } catch (e) {
    // error reading value
    console.log('Error: ', e);
  }
};
const ThemeProvider = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const saveTheme = await getInitialTheme();
      dispatch(swapTheme(saveTheme));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <SafeAreaView style={{flex: 1}}>{props.children}</SafeAreaView>;
};

export default ThemeProvider;
