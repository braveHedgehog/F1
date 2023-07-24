/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { useEffect } from 'react';
import React from 'react';
import {View, Text} from 'react-native';

const DriverDetail = ({route}) => {
  const {id} = route.params;
  useEffect(() => {
    const data = require('../driver-data.json');
    setData(data);
  }, []);

  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
};

export default DriverDetail;
