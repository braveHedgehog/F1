/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import Style from './Standing.Style';

const Standing = props => {
  return (
    <View style={Style.container} >
     <View style={Style.align}>
      <Text style={Style.number}>{props.driver.id}</Text>
      <Text style={Style.name}>{props.driver.name}</Text>
     </View>
    </View>
  );
};

export default Standing;
