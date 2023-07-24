/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {ScrollView, FlatList, Text,ActivityIndicator} from 'react-native';
import NewsCard from '../components/NewsCard/NewsCard';
import news_data from '../news-data.json';
import AppBar from '../components/AppBar/AppBar';
import Standing from '../components/Standing/Standing';
import TeamStanding from '../components/TeamStanding/TeamStanding';
import driver_data from '../driver-standing-data.json';
import Style from './Home.Style';
import team_data from '../team-data.json';

const Home = ({navigation}) => {
  const [list, setList] = useState(news_data);
  const [driverList, setDriverList] = useState(driver_data);
  const [teamList, setTeamList] = useState(team_data);

  const handleSearch = text => {
    const filteredList = news_data.filter(news => {
      const searchedText = text.toLowerCase();
      const currentTitle = news.news_head.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });

    setList(filteredList);
  };

  return (
    <ScrollView style={Style.page}>
      <AppBar onSearch={handleSearch} />
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={list}
        renderItem={({item}) => (
          <NewsCard news={item} ItemSeparatorComponent={setList} />
        )}
      />
      <Text style={Style.title}>Driver Standings</Text>
      <FlatList
        style={Style.container}
        keyExtractor={item => item.id.toString()}
        data={driverList}
        renderItem={({item}) => (
          <Standing driver={item} ItemSeparatorComponent={setDriverList} />
        )}
      />
      <Text style={Style.title}>Constructor Standings</Text>
      <FlatList
        style={Style.container}
        keyExtractor={item => item.id.toString()}
        data={teamList}
        renderItem={({item}) => (
          <TeamStanding team={item} ItemSeparatorComponent={setTeamList} />
        )}
      />
    </ScrollView>
  );
};

export default Home;
