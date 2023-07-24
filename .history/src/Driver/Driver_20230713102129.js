/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import driver_data from '../driver-data.json';
import {FlatList} from 'react-native';
import DriverCard from '../components/DriverCard/DriverCard';

const Driver = navigation => {
  const [list, setList] = useState(driver_data);

  const handleDriverSelect = id => {
    navigation.navigate('DriverDetail', {id});
  };

  const renderDriver = ({item}) => (
    <DriverCard product={item} onSelect={() => handleDriverSelect(item.id)} />
  );

  return (
    <FlatList
      data={list}
      renderItem={renderDriver}
    />
  );
};

export default Driver;
