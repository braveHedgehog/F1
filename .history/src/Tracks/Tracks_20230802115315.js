/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import TrackCard from '../components/TrackCard/TrackCard';
import track_data from '../track-data.json';
import AppBar from '../components/AppBar/AppBar';
import Style from '../Team/TeamStyle';

const Track = ({navigation}) => {
  const [list, setList] = useState(track_data);
  const handleSearch = text => {
    const filteredList = track_data.filter(track => {
      const searchedText = text.toLowerCase();
      const currentTitle = track.track_country.toLowerCase();

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
    </View>
  );
};

export default Track;
