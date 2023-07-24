/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React from 'react';
import {View, Text} from 'react-native';
import driver_data from '../driver-data.json';

const DriverDetail = ({route}) => {
  const {id} = route.params;
  const {data} = useFetch(driver_data.id[{id}]);

  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
};

export default DriverDetail;
