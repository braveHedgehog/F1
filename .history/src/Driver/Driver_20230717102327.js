/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import driver_data from '../driver-data.json';
import {FlatList} from 'react-native';
import DriverCard from '../components/DriverCard/DriverCard';

const Driver = ({navigation}) => {
  const [list, setList] = useState(driver_data);

  const onSelect = id => {

    navigation.navigate('DriverDetail', {
      id,
    });
  };

  return (
    <FlatList
      keyExtractor={item => item.id.toString()}
      data={list}
      renderItem={({item}) => (
        <DriverCard driver={item} ItemSeparatorComponent={setList} onSelect={() => onSelect(item.id)} />
      )}
    />
  );
};

export default Driver;
