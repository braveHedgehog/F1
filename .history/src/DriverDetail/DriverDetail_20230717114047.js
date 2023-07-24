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
      <Image style={Style.Image} source={{uri: imageUrl}}/>
      <Text style={Style.number} >{Driver_Number}</Text>
      <Text style={Style.name} >{name}</Text>
      <View style={Style.inner_container}>
      <Image style={Style.helmet_image} source={{uri: helmet_url}}/>
      <Text style={Style.title} >{Team}</Text>
      <Text style={Style.title} >{Country}</Text>
      <Text style={Style.title} >{World_Champions}</Text>
      <Text style={Style.title} >{Podiums}</Text>
      <Text style={Style.title} >{Points}</Text>
      <Text style={Style.title} >{Pole_Position}</Text>
      <Text style={Style.title} >{Grands_Prix_entered}</Text>
      <Text style={Style.title} >{Highest_Race_Finish}</Text>
      <Text style={Style.title} >{First_Win}</Text>
      <Text style={Style.title} >{Date_of_Birth}</Text>
      <Text style={Style.title} >{Place_of_birth}</Text>
      </View>
      <Text style={Style.bio} >{Bio}</Text>
    </View>
  );
};

export default DriverDetail;
