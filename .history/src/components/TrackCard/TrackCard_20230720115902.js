/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import Style from './TrackCard.Style';

const TrackCard = ({track, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={Style.container} >
        <Text style={Style.round} >{track.round}</Text>
        <View style={Style.inner_container} >
          <View style={Style.row_container} >
            <Text style={Style.date} >{track.date}</Text>
            <Image style={Style.country_image} source={{uri: track.track_country_image}} />
          </View>
          <Text style={Style.country} >{track.track_country}</Text>
          <Text style={Style.name} >{track.track_name}</Text>
          <View style={Style.layout} >
          <Image style={Style.track_layout} source={{uri: track.track_layout}} />
          </View>
        </View>
    </View>
    </TouchableWithoutFeedback>
  );
};

export default TrackCard;
