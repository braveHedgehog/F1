/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {FlatList} from 'react-native';
import TrackCard from '../components/TrackCard/TrackCard';
import track_data from '../track-data.json';

const Track = ({navigation}) => {
  const [list, setList] = useState(track_data);
  return (
    <FlatList
    keyExtractor={item => item.id.toString()}
    data={list}
    renderItem={({item}) => (
      <TrackCard
        track={item}
        ItemSeparatorComponent={setList}
        onSelect={() => {
          navigation.navigate('TrackDetail', {
            id: item.id,
            name: item.name,
            Base: item.Base,
            constructor_champions: item.constructor_champions,
            driver_champions: item.driver_champions,
            wins: item.wins,
            pole: item.pole,
            podiums: item.podiums,
            Total_Grand_Prix: item.Total_Grand_Prix,
            Team_chief: item.Team_chief,
            technical_chief: item.technical_chief,
            power_unit: item.power_unit,
            first_team_entry: item.first_team_entry,
            Bio: item.Bio,
            logo: item.logo,
            car: item.car,
            firs_driver: item.firs_driver,
            second_driver: item.second_driver,
            slider_1: item.slider_1,
            slider_2: item.slider_2,
            slider_3: item.slider_3,
          });
        }}
      />
    )}
  />
  );
};

export default Track;
