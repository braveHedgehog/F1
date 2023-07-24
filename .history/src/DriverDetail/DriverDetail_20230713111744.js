/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React from 'react';
import {View, Text} from 'react-native';

const DriverDetail = ({route}) => {
  const {id} = route.params;
  useEffect(() => {
    const data = require('./public/data.json');
    setData(data);
  }, []);

  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
};

export default DriverDetail;
