/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {FlatList, ScrollView,View} from 'react-native';
import TeamCard from '../components/TeamCard/TeamCard';
import team_data from '../team-data.json';
import AppBar from '../components/AppBar/AppBar';
import Style from './TeamStyle';

const Team = ({navigation}) => {
  const [list, setList] = useState(team_data);

  const handleSearch = text => {
    const filteredList = team_data.filter(team => {
      const searchedText = text.toLowerCase();
      const currentTitle = team.name.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });

    setList(filteredList);
  };

  return (
    <View>
      <AppBar onSearch={handleSearch} />
      <FlatList
        style={Style.page}
        keyExtractor={item => item.id.toString()}
        data={list}
        renderItem={({item}) => (
          <TeamCard
            team={item}
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
                slider_1: item.slider_1,
                slider_2: item.slider_2,
                slider_3: item.slider_3,
              });
            }}
          />
        )}
      />
    </View>
  );
};

export default Team;
