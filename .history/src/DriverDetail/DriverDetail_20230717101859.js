/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';

const DriverDetail = route => {
  const {id} = route.params;

  return (
    <View>
      <Text>{JSON.stringify(id.name)}</Text>
    </View>
  );
};

export default DriverDetail;
