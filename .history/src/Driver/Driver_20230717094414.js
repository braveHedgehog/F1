/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import driver_data from '../driver-data.json';
import {Link} from 'react-native';
import {FlatList} from 'react-native';
import DriverCard from '../components/DriverCard/DriverCard';

const Driver = navigation => {
  const [list, setList] = useState(driver_data);

  return (
    <Link
      to={{
        pathname: '../DriverDetail.js',
        state: list, // your data array of objects
      }}>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={list}
        renderItem={({item}) => (
          <DriverCard driver={item} ItemSeparatorComponent={setList} />
        )}
      />
    </Link>
  );
};

export default Driver;
