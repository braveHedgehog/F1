/* eslint-disable prettier/prettier */
import React from 'react';
import Style from './AppBar.Style';
import {View, Image, TextInput,TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AppBar = props => {
  return (
    <View style={Style.container}>
      <Image style={Style.Image} source={require('../../assets/F1-logo.png')} />
      <TextInput
        placeholder="Ara..."
        onChangeText={props.onSearch}
        style={Style.Input}
      />
    </View>
  );
};

export default AppBar;
