/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';

const DriverDetail = ({props}) => {

  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );
};

export default DriverDetail;
