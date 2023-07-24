/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import driver_data from '../driver-data.json';

const DriverDetail = ({props}) => {

  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );
};

export default DriverDetail;
