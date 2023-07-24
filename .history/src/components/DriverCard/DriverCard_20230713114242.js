/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import Style from './DriverCard.style';

const DriverCard = ({props, navigation}) => {
  return (
    <View style={Style.container}>
      <TouchableWithoutFeedback onPress={(
        navigation.navigate('DriverDetail',props.Country,props.name,props.Driver_Number,props.team,props.imageUrl,props.Pole_Position,props.Points,props.Highest_Race_Finish,props.Grands_Prix_entered)

      )} >
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
