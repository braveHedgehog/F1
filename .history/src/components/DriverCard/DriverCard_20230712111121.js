/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Style from './DriverCard.style';

const DriverCard = ({driver}) => {
  return (
    <TouchableOpacity style={Style.container}>
        <View style={Style.inner_Container}>
          <Text style={Style.number}>{driver.number}</Text>
          <View style={Style.name_container}>
            <Text style={Style.name}>{driver.name}</Text>
            <Text style={Style.country}>{driver.country}</Text>
          </View>
          <Text style={Style.team}>{driver.team}</Text>
          <View style={Style.Image_container}>
          <Image
            style={Style.Image}
            source={{uri: driver.image}}
          />
          </View>
        </View>
    </TouchableOpacity>
  );
};

export default DriverCard;
