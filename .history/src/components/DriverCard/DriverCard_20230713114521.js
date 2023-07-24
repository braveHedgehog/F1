/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import Style from './DriverCard.style';

const DriverCard = ({props, onSelect}) => {
  return (
    <View style={Style.container}>
      <TouchableWithoutFeedback
        onPress={navigation.navigate(
          'DriverDetail',
          props.Country,
          props.name,
          props.Driver_Number,
          props.team,
          props.imageUrl,
          props.Pole_Position,
          props.Points,
          props.Highest_Race_Finish,
          props.Grands_Prix_entered,
          props.Podiums,
          props.World_Champions,
          props.Date_of_Birth,
          props.Place_of_birth,
          props.Bio,
          props.First_Win,
          props.helmet_url
        )}>
        <View style={Style.inner_Container}>
          <Text style={Style.number}>{props.Driver_Number}</Text>
          <Text style={Style.name}>{props.name}</Text>
          <Text style={Style.country}>{props.Country}</Text>
          <Text style={Style.team}>{props.Team}</Text>
          <View style={Style.Image_container}>
            <Image style={Style.Image} source={{uri: props.imageUrl}} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default DriverCard;
