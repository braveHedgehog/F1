/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import driver_data from '../driver-data.json';
import {FlatList} from 'react-native';
import DriverCard from '../components/DriverCard/DriverCard';

const Driver = ({navigation}) => {
  const [list, setList] = useState(driver_data);

  const onSelect = ({}) => {
    navigation.navigate('DriverDetail', {
      id: list.id,
      name: list.name,
      Team: list.Team,
      Driver_Number: list.Driver_Number,
      Pole_Position: list.Pole_Position,
      Points: list.Points,
      Highest_Race_Finish: list.Highest_Race_Finish,
      Grands_Prix_entered: list.Grands_Prix_entered,
      Country: list.Country,
      Podiums: list.Podiums,
      World_Champions: list.World_Champions,
      Date_of_Birth: list.Date_of_Birth,
      Place_of_birth: list.Place_of_birth,
      Bio: list.Bio,
      First_Win: list.First_Win,
      imageUrl: list.imageUrl,
      helmet_url: list.helmet_url,
    });
  };

  return (
    <FlatList
      keyExtractor={item => item.id.toString()}
      data={list}
      renderItem={({item}) => (
        <DriverCard
          driver={item}
          ItemSeparatorComponent={setList}
          onSelect={() => {
            navigation.navigate('DriverDetail', {
              id: item.id,
              name: list.name,
              Team: list.Team,
              Driver_Number: list.Driver_Number,
              Pole_Position: list.Pole_Position,
              Points: list.Points,
              Highest_Race_Finish: list.Highest_Race_Finish,
              Grands_Prix_entered: list.Grands_Prix_entered,
              Country: list.Country,
              Podiums: list.Podiums,
              World_Champions: list.World_Champions,
              Date_of_Birth: list.Date_of_Birth,
              Place_of_birth: list.Place_of_birth,
              Bio: list.Bio,
              First_Win: list.First_Win,
              imageUrl: list.imageUrl,
              helmet_url: list.helmet_url,
            });
          }}
        />
      )}
    />
  );
};

export default Driver;
