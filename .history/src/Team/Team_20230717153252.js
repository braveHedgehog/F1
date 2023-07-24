/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {FlatList} from 'react-native';
import TeamCard from '../components/TeamCard/TeamCard';
import team_data from '../team-data.json';

const Team = ({navigation}) => {
  const [list, setList] = useState(team_data);
  return (
    <FlatList
    keyExtractor={item => item.id.toString()}
    data={list}
    renderItem={({item}) => (
      <TeamCard
        driver={item}
        ItemSeparatorComponent={setList}
        onSelect={() => {
          navigation.navigate('TeamDetail', {
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
          });
        }}
      />
    )}
  />
  );
};

export default Team;
