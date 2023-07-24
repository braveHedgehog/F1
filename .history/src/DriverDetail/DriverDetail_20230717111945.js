/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';

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
    <View>
      <Text>id: {id}</Text>
    </View>
  );
};

export default DriverDetail;
