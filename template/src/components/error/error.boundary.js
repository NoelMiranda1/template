import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';

const ErrorBoundaryApp = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <LottieView
          style={styles.lottieSize}
          source={require('../../assets/animations/error-boundary.json')}
          autoPlay
          loop
        />
        <Text style={styles.title}>Something happened!</Text>
        <Text style={styles.subtitle} numberOfLines={3}>
          {props.error.toString()}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.resetError();
          }}>
          <Text style={styles.buttonText}>Try again!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 15,
  },
  container: {
    width: '100%',
    padding: 10,
  },
  lottieSize: {
    height: 200,
    width: 200,
  },
  title: {
    fontSize: 24,
    color: '#000',
    padding: 10,
  },
  subtitle: {
    padding: 5,
    color: '#000',
    fontSize: 19,
    paddingBottom: 10,
  },
  button: {
    borderRadius: 20,
    color: '#fff',
    backgroundColor: 'red',
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default ErrorBoundaryApp;
