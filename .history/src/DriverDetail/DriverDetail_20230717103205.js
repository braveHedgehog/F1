/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';

const DriverDetail = ({route}) => {
  const {id} = route.params;

console.log(id);

  return (
    <View>
      <Text>{JSON.stringify(id)}</Text>
    </View>
  );
};

export default DriverDetail;
