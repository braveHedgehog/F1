/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';

const DriverDetail = ({router}) => {

  const {id} = router.params;

  return (
    <View>
      <Text>{router.name}</Text>
    </View>
  );
};

export default DriverDetail;
