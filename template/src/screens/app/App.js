import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from '../../config/configStore';
import {StatusBar} from 'react-native';
import AppNavigator from '../../routes/appnavigator.config';
import ThemeProvider from '../../config/theme.config';
import ErrorBoundary from 'react-native-error-boundary';
import ErrorBoundaryApp from '../../components/error/error.boundary';

// LEA EL README JOVEN :D

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <ThemeProvider>
          <ErrorBoundary FallbackComponent={ErrorBoundaryApp}>
            <StatusBar
              barStyle="light-content"
              backgroundColor={'blue'}
              animated={true}
            />
            <AppNavigator />
          </ErrorBoundary>
        </ThemeProvider>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
