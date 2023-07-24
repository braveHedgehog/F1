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
            race_distance:item.race_distance,
            lap_record: item.lap_record,
            lap_record_driver: item.lap_record_driver,
            track_sector: item.track_sector,
            slider_1: item.slider_1,
            slider_2:item.slider_2,
            slider_3: item.slider_3,
            slider_4: item.slider_4,
          });
        }}
      />
    )}
  />
  );
};

export default Track;
