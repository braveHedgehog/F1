/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';

const TracksDetail = ({route}) => {
  const {
    track_name,
    track_country,
    date,
    round,
    track_country_image,
    track_layout,
    track_info,
    first_grand_prix,
    number_of_laps,
    circuit_length,
    race_distance,
    lap_record,
    lap_record_driver,
    track_sector,
    slider_4,
    slider_1,
    slider_2,
    slider_3,
  } = route.params;

  return (
    <View>
      <Text>{track_name}</Text>
    </View>
  );
};

export default TracksDetail;
