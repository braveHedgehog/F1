/* eslint-disable prettier/prettier */
import React from 'react';
import driver_data from '../driver-data.json';
import {FlatList} from 'react-native';
import DriverCard from '../components/DriverCard/DriverCard';

const Driver = navigation => {
  const select = () => {
    navigation.navigate(
      'DriverDetail',
      driver_data.Country,
      driver_data.name,
      driver_data.Driver_Number,
      driver_data.team,
      driver_data.imageUrl,
      driver_data.Pole_Position,
      driver_data.Points,
      driver_data.Highest_Race_Finish,
      driver_data.Grands_Prix_entered,
      driver_data.Podiums,
      driver_data.World_Champions,
      driver_data.Date_of_Birth,
      driver_data.Place_of_birth,
      driver_data.Bio,
      driver_data.First_Win,
      driver_data.helmet_url,
    );
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
