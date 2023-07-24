/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import driver_data from '../driver-data.json';
import {FlatList} from 'react-native';
import DriverCard from '../components/DriverCard/DriverCard';

const Driver = ({navigation}) => {
  const [list, setList] = useState(driver_data);


  return (
    <FlatList
      keyExtractor={item => item.id.toString()}
      data={list}
      renderItem={({item}) => (
        <DriverCard
          driver={item}
          ItemSeparatorComponent={setList}
          onSelect={(
            id,
            name,
            Team,
            Driver_Number,
            Pole_Position,
            Points,
            Highest_Race_Finish,
            Grands_Prix_entered,
            Country,
            Podiums,
            World_Champions,
            Date_of_Birth,
            Place_of_birth,
            Bio,
            First_Win,
            imageUrl,
            helmet_url,
          ) => {
            navigation.navigate('DriverDetail', {
              id,
              name,
              Team,
              Driver_Number,
              Pole_Position,
              Points,
              Highest_Race_Finish,
              Grands_Prix_entered,
              Country,
              Podiums,
              World_Champions,
              Date_of_Birth,
              Place_of_birth,
              Bio,
              First_Win,
              imageUrl,
              helmet_url,
            });
          }}
        />
      )}
    />
  );
};

export default Driver;
