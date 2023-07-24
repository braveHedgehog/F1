/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import driver_data from '../driver-data.json';
import {FlatList} from 'react-native';
import DriverCard from '../components/DriverCard/DriverCard';
import { useNavigation } from '@react-navigation/native';

const Driver = navigation => {
  const [list, setList] = useState(driver_data);


  const onSelect = () => {
    const navigation = useNavigation();
    navigation.navigate(
      'DriverDetail',
      {Country: props.Country},
      {name: props.name},
      {Driver_Number: props.Driver_Number},
      {team: props.team},
      {imageUrl: props.imageUrl},
      {Pole_Position: props.Pole_Position},
      {Points: props.Points},
      {Highest_Race_Finish: props.Highest_Race_Finish},
      {Grands_Prix_entered: props.Grands_Prix_entered},
      {Podiums: props.Podiums},
      {World_Champions: props.World_Champions},
      {Date_of_Birth: props.Date_of_Birth},
      {Place_of_birth: props.Place_of_birth},
      {Bio: props.Bio},
      {First_Win: props.First_Win},
      {helmet_url: props.helmet_url},
    );
  };
  
  return (
    <FlatList
    keyExtractor={item => item.id.toString()}
    data={list}
    renderItem={({item}) => <DriverCard driver={item}
    ItemSeparatorComponent={setList} />}
  />
  );
};

export default Driver;
