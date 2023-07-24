/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Style from './DriverCard.style';

const DriverCard = ({props, onPress}) => {
  return (
    <TouchableOpacity style={Style.container} onPress={onPress}>
      <View style={Style.inner_Container}>
        <Text style={Style.number}>{props.driver.name}</Text>
        <Text style={Style.name}>{props.name}</Text>
        <Text style={Style.country}>{props.Country}</Text>
        <Text style={Style.team}>{props.Team}</Text>
        <View style={Style.Image_container}>
          <Image style={Style.Image} source={{uri: props.imageUrl}} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DriverCard;
