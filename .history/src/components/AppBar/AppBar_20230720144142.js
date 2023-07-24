/* eslint-disable prettier/prettier */
import React from 'react';
import Style from './AppBar.Style';
import {View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AppBar = () => {
  return (
    <View style={Style.container} >
      <Image style={Style.Image} source={require('../../assets/F1-logo.png')} />
      <View style={Style.align} >
      <Icon name="user"  style={Style.Icon} />
      </View>
    </View>
  );
};

export default AppBar;
