/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Style from './TeamDetail.Style';
import {SliderBox} from 'react-native-image-slider-box';

const TeamDetail = ({route}) => {
  const {
    name,
    base,
    constructor_champions,
    driver_champions,
    wins,
    pole,
    podiums,
    Total_Grand_Prix,
    Team_chief,
    technical_chief,
    power_unit,
    first_team_entry,
    Bio,
    logo,
    car,
    second_driver,
    firs_driver,
    slider_1,
    slider_2,
    slider_3,
  } = route.params;

  constructor();{
    this.state = {
      images: [
        slider_1,
        slider_2,
        slider_3
      ]
    };
  }

  return (
    <ScrollView style={Style.page}>
      <SliderBox images={this.state.images} style={Style.slider} />
      <View style={Style.container}>
        <Text style={Style.name}>{name}</Text>
      </View>
    </ScrollView>
  );
};

export default TeamDetail;
