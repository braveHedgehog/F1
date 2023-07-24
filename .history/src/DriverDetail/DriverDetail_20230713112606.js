/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React from 'react';
import {View, Text} from 'react-native';

const DriverDetail = ({route}) => {
  const {id} = route.params;
  const {data} = useFetch();

  return (
    <View>
      <Text>{data.id['1']}</Text>
    </View>
  );
};

export default DriverDetail;
