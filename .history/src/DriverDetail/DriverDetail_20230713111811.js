/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React from 'react';
import {View, Text} from 'react-native';

const DriverDetail = ({route}) => {
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
