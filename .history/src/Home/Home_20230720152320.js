/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {ScrollView, FlatList} from 'react-native';
import NewsCard from '../components/NewsCard/NewsCard';
import news_data from '../news-data.json';


const Home = ({navigation}) => {
  const [list, setList] = useState(news_data);
  return (
    <ScrollView>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={list}
        renderItem={({item}) => (
          <NewsCard
            track={item}
            ItemSeparatorComponent={setList}
            onSelect={() => {
              navigation.navigate('TrackDetail', {
                id: item.id,
                track_name: item.track_name,
                track_country: item.track_country,
                date: item.date,
                round: item.round,
                track_country_image: item.track_country_image,
                track_layout: item.track_layout,
                track_info: item.track_info,
                first_grand_prix: item.first_grand_prix,
                number_of_laps: item.number_of_laps,
                circuit_length: item.circuit_length,
                race_distance: item.race_distance,
                lap_record: item.lap_record,
                lap_record_driver: item.lap_record_driver,
                track_sector: item.track_sector,
              });
            }}
          />
        )}
      />
    </ScrollView>
  );
};

export default Home;
