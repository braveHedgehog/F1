/* eslint-disable prettier/prettier */
import React from 'react';
import driver_data from '../driver-data.json';
import {FlatList} from 'react-native';
import DriverCard from '../components/DriverCard/DriverCard';

const Driver = navigation => {
  const select = () => {
    navigation.navigate('DriverDetail');
  };

  return (
    <FlatList
      keyExtractor={item => item.id.toString()}
      data={driver_data}
      renderItem={({item}) => <DriverCard driver={item} onSelect={select} />}
    />
  );
};

export default Driver;
