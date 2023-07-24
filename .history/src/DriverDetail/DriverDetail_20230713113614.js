/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React from 'react';
import {View, FlatList} from 'react-native';
import driver_data from '../driver-data.json';
import useFetch from '../hooks/useFetch';

const DriverDetail = ({route}) => {
  const {id} = route.params;
  const {data} = useFetch(driver_data[`${id}`]);


  

  return (
    <View>
      <FlatList data={driver_data}  />
    </View>
  );
};

export default DriverDetail;
