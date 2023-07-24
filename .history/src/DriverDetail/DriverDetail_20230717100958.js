/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';

const DriverDetail = route => {
  const {driver} = route.params;

  return (
    <View>
      <Text>{driver.name}</Text>
    </View>
  );
};

export default DriverDetail;
