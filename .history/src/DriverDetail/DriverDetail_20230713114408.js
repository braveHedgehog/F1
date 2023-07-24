/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React from 'react';
import {View, Text} from 'react-native';

const DriverDetail = ({route}) => {
  const {props} = route.params;

  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );
};

export default DriverDetail;
