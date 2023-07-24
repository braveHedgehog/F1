/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {FlatList, ScrollView} from 'react-native';
import TrackCard from '../components/TrackCard/TrackCard';
import track_data from '../track-data.json';
import AppBar from '../components/AppBar/AppBar';

const Track = ({navigation}) => {
  const [list, setList] = useState(track_data);
  const handleSearch = text => {
    const filteredList = track_data.filter(team => {
      const searchedText = text.toLowerCase();
      const currentTitle = team.name.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });

    setList(filteredList);
  };
  return (
    <ScrollView>
      <AppBar onSearch={handleSearch} />
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

export default Track;
