/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React from 'react';
import {View, Text} from 'react-native';
import driver_data from '../driver-data.json';
import useFetch from '../hooks/useFetch';

const DriverDetail = ({route}) => {
  const {id} = route.params;
  const {data} = useFetch(driver_data[`${id}`]);

console.log(driver_data[`${id}`]);
  

  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
};

export default DriverDetail;
