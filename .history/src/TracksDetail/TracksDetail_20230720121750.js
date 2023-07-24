/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, ScrollView,Image} from 'react-native';
import Style from './TracksDetail.Style';
import {SliderBox} from 'react-native-image-slider-box';

const TracksDetail = ({route}) => {
  const {
    track_country,
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
  } = route.params;

  

  return (
    <ScrollView style={Style.page} >
       <Image style={Style.slider} source={{uri: track_sector}} />
      <View style={Style.container} >
        <View style={Style.align} >
        <Text style={Style.name}>{track_country}</Text>
        <Image style={Style.track_country} source={{uri: track_country_image}} />
        </View>
      </View>
    </ScrollView>
  );
};

export default TracksDetail;
