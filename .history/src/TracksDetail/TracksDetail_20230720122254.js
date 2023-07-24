/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, ScrollView,Image} from 'react-native';
import Style from './TracksDetail.Style';

const TracksDetail = ({route}) => {
  const {
    track_name,
    track_country,
    track_country_image,
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
        <View style={Style.align} >
        <Text style={Style.title}>First Grand Prix</Text>
        <Text style={Style.contain}>{first_grand_prix}</Text>
        </View>
        <View style={Style.align} >
        <Text style={Style.title}>Number of Lap</Text>
        <Text style={Style.contain}>{number_of_laps}</Text>
        </View>
        <View style={Style.align} >
        <Text style={Style.title}>Circuit Length</Text>
        <Text style={Style.contain}>{circuit_length}</Text>
        </View>
        <View style={Style.align} >
        <Text style={Style.title}>Race Distance</Text>
        <Text style={Style.contain}>{race_distance}</Text>
        </View>
        <View style={Style.align} >
        <Text style={Style.title}>Lap Record</Text>
        <Text style={Style.contain}>{lap_record}</Text>
        <Text style={Style.driver}>{lap_record_driver}</Text>
        </View>
        <Text>{track_name}</Text>
        <Text style={Style.info}>{track_info}</Text>
      </View>
    </ScrollView>
  );
};

export default TracksDetail;
