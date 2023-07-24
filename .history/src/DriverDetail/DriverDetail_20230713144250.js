/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';

const DriverDetail = props => {
 
const {driver} = props.route.params;

  return (
    <View>
      <Text>{driver.name}</Text>
    </View>
  );
};

export default DriverDetail;
