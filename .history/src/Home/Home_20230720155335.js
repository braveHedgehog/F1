/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {ScrollView, FlatList, TouchableWithoutFeedback} from 'react-native';
import NewsCard from '../components/NewsCard/NewsCard';
import news_data from '../news-data.json';
import AppBar from '../components/AppBar/AppBar';
import PagerView from 'react-native-pager-view';

const Home = ({navigation}) => {
  const [list, setList] = useState(news_data);
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

      <PagerView>
        <TouchableWithoutFeedback key="1" >
          
        </TouchableWithoutFeedback>
      </PagerView>
    </ScrollView>
  );
};

export default Home;
