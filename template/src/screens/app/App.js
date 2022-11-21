import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from '../../config/configStore';
import {StatusBar} from 'react-native';
import AppNavigator from '../../routes/appnavigator.config';

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={'blue'}
          animated={true}
        />
        <AppNavigator />
      </Provider>
    </NavigationContainer>
  );
}

export default App;
