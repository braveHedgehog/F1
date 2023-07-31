/* eslint-disable prettier/prettier */
import React from 'react';
import Style from './AppBar.Style';
import {View, Image, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const AppBar = props => {
  return (
    <View style={Style.container}>
      <Image style={Style.Image} source={require('../../assets/F1-logo.png')} />
      <TextInput
        placeholder="Ara..."
        onChangeText={props.onSearch}
        style={Style.Input}
      />

      <TouchableWithoutFeedback>
        <View style={Style.align}>
          <Icon name="user" style={Style.Icon} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AppBar;
