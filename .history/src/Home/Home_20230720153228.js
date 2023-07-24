/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {ScrollView, FlatList} from 'react-native';
import NewsCard from '../components/NewsCard/NewsCard';
import news_data from '../news-data.json';
import AppBar from '../components/AppBar/AppBar';


const Home = ({navigation}) => {
  const [list, setList] = useState(news_data);
  return (
    <ScrollView>
      <AppBar/>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={list}
        renderItem={({item}) => (
          <NewsCard
            news={item}
            ItemSeparatorComponent={setList}
          />
        )}
      />
    </ScrollView>
  );
};

export default Home;
