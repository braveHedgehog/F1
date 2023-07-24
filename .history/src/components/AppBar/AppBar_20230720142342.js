/* eslint-disable prettier/prettier */
import React from 'react';
import Style from './AppBar.Style';
import {View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AppBar = () => {
  return (
    <View>
      <Image style={Style.Image} source={require('../assets/F1-logo.png')} />
      <Icon name="rocket" size={30} color="#900" />
    </View>
  );
};

export default AppBar;
