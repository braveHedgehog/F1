/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {ScrollView, FlatList, TouchableWithoutFeedback} from 'react-native';
import NewsCard from '../components/NewsCard/NewsCard';
import news_data from '../news-data.json';
import AppBar from '../components/AppBar/AppBar';
import Standing from '../components/Standing/Standing';
import TeamStanding from '../components/TeamStanding/TeamStanding';
import driver_data from '../driver-standing-data.json';

const Home = ({navigation}) => {
  const [list, setList] = useState(news_data);
  const [driverList, setDriverList] = useState(driver_data);
  return (
    <ScrollView>
      <AppBar />
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={list}
        renderItem={({item}) => (
          <NewsCard news={item} ItemSeparatorComponent={setList} />
        )}
      />
       <FlatList
        keyExtractor={item => item.id.toString()}
        data={driverList}
        renderItem={({item}) => (
          <Standing driver={item} ItemSeparatorComponent={setDriverList} />
        )}
      />
      <TeamStanding />
    </ScrollView>
  );
};

export default Home;
