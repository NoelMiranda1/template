import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from '../../config/configStore';
import {StatusBar} from 'react-native';
import AppNavigator from '../../routes/appnavigator.config';
import ThemeProvider from '../../config/theme.config';

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <ThemeProvider>
          <StatusBar
            barStyle="light-content"
            backgroundColor={'blue'}
            animated={true}
          />
          <AppNavigator />
        </ThemeProvider>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
