/* eslint-disable prettier/prettier */
import React from 'react';
import driver_data from '../driver-data.json';
import {FlatList} from 'react-native';
import DriverCard from '../components/DriverCard/DriverCard';

const Driver = navigation => {

  const select = () => {
    navigation.navigate(
      'DriverDetail',
      props.Country,
      props.name,
      props.Driver_Number,
      props.team,
      props.imageUrl,
      props.Pole_Position,
      props.Points,
      props.Highest_Race_Finish,
      props.Grands_Prix_entered,
      props.Podiums,
      props.World_Champions,
      props.Date_of_Birth,
      props.Place_of_birth,
      props.Bio,
      props.First_Win,
      props.helmet_url
    )
  }
  
  return (
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={driver_data}
          renderItem={({item}) => <DriverCard driver={item} onSelect={select}/>}
        />
  );
};


export default Driver;
