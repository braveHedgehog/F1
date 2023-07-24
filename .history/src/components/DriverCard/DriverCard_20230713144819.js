/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import Style from './DriverCard.style';

const DriverCard = props => {
  return (
    <View style={Style.container}>
      <TouchableWithoutFeedback>
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
