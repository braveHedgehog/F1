/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import driver_data from '../driver-data.json';

const DriverDetail = ({route}) => {

  const {id} = route.params;


  return (
    <View>
      <Text>{driver_data.name}</Text>
    </View>
  );
};

export default DriverDetail;
