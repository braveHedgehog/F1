/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';

const DriverDetail = ({route,props}) => {

  const {id} = route.params;


  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );
};

export default DriverDetail;
