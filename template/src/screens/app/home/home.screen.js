import {View, Text} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

const Home = () => {
  // const dispatch = useDispatch();
  // const global = useSelector(state => state);

  // console.log('state', global);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
