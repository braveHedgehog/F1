/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import Style from './DriverCard.style';
import driver_data from '../driver-data.json';

const DriverCard = ({props, onSelect}) => {
  return (
    <View style={Style.container}>
      <TouchableWithoutFeedback
        onPress={onSelect}>
        <View style={Style.inner_Container}>
          <Text style={Style.number}>{driver_data.Driver_Number}</Text>
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
