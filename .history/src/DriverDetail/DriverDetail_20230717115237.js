/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
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
    posterUrl,
    helmet_url,
  } = route.params;


  return (
    <ScrollView style={Style.container}>
      <Image style={Style.Image} source={{uri: posterUrl}}/>
      <Text style={Style.number} >{Driver_Number}</Text>
      <Text style={Style.name} >{name}</Text>
      <View style={Style.inner_container}>
      <Image style={Style.helmet_image} source={{uri: helmet_url}}/>
      <Text style={Style.title} >Team: {Team}</Text>
      <Text style={Style.title} >Country: {Country}</Text>
      <Text style={Style.title} >World Champions: {World_Champions}</Text>
      <Text style={Style.title} >Podiums: {Podiums}</Text>
      <Text style={Style.title} >Points: {Points}</Text>
      <Text style={Style.title} >Pole Position: {Pole_Position}</Text>
      <Text style={Style.title} >Grands Prix Entered: {Grands_Prix_entered}</Text>
      <Text style={Style.title} >Highest Race Finish: {Highest_Race_Finish}</Text>
      <Text style={Style.title} >First Win: {First_Win}</Text>
      <Text style={Style.title} >Date of Birth: {Date_of_Birth}</Text>
      <Text style={Style.title} >Place of Birth: {Place_of_birth}</Text>
      </View>
      <Text style={Style.bio} >{Bio}</Text>
    </ScrollView>
  );
};

export default DriverDetail;
