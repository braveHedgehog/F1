/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Style from './TracksDetail.Style';
import {SliderBox} from 'react-native-image-slider-box';

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

  constructor();{
    this.state = {
      images: [
        slider_1,
        slider_2,
        slider_3,
        slider_4
      ]
    };
  }

  return (
    <ScrollView>
      <SliderBox images={this.state.images} style={Style.slider} />
      <Text>{track_name}</Text>
    </ScrollView>
  );
};

export default TracksDetail;
