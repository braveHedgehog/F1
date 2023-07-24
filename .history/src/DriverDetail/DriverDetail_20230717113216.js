/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image} from 'react-native';
import Style from './DriverDetail.Style';

const DriverDetail = ({route}) => {
  const {
    id,
    name,
    Team,
    Driver_Number,
    Pole_Position,
    Points,
    Highest_Race_Finish,
    Grands_Prix_entered,
    Country,
    Podiums,
    World_Champions,
    Date_of_Birth,
    Place_of_birth,
    Bio,
    First_Win,
    imageUrl,
    helmet_url,
  } = route.params;


  return (
    <View style={Style.container}>
      <Image />
    </View>
  );
};

export default DriverDetail;
