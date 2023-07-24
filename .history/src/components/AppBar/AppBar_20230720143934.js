/* eslint-disable prettier/prettier */
import React from 'react';
import Style from './AppBar.Style';
import {View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AppBar = ({navigation}) => {
  return (
    <View style={Style.container} >
      <Image style={Style.Image} source={require('../../assets/F1-logo.png')} />
      <Icon name="user"  style={Style.Icon} onSelect={
        navigation.navigate('Profile')
      } />
    </View>
  );
};

export default AppBar;
