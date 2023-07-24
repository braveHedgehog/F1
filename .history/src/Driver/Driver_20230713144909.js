/* eslint-disable prettier/prettier */
import React from 'react';
import driver_data from '../driver-data.json';
import {FlatList} from 'react-native';
import DriverCard from '../components/DriverCard/DriverCard';

const Driver = navigation => {
  /*const select = () => {
    navigation.navigate(
      'DriverDetail',
      {Country: driver_data.Country},
      {name: driver_data.name},
      {Driver_Number: driver_data.Driver_Number},
      {team: driver_data.team},
      {imageUrl: driver_data.imageUrl},
      {Pole_Position: driver_data.Pole_Position},
      {Points: driver_data.Points},
      {Highest_Race_Finish: driver_data.Highest_Race_Finish},
      {Grands_Prix_entered: driver_data.Grands_Prix_entered},
      {Podiums: driver_data.Podiums},
      {World_Champions: driver_data.World_Champions},
      {Date_of_Birth: driver_data.Date_of_Birth},
      {Place_of_birth: driver_data.Place_of_birth},
      {Bio: driver_data.Bio},
      {First_Win: driver_data.First_Win},
      {helmet_url: driver_data.helmet_url},
    );
  };
*/
  return (
    <FlatList
      keyExtractor={item => item.id.toString()}
      data={driver_data}
      renderItem={({item}) => <DriverCard driver={item} />}
    />
  );
};

export default Driver;
