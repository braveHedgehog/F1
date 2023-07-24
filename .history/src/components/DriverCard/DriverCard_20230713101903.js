/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Style from './DriverCard.style';

const DriverCard = ({driver, onPress}) => {
  return (
    <TouchableOpacity style={Style.container} onPress={onPress}>
      <View style={Style.inner_Container}>
        <Text style={Style.number}>{driver.Driver_Number}</Text>
        <Text style={Style.name}>{driver.name}</Text>
        <Text style={Style.country}>{driver.Country}</Text>
        <Text style={Style.team}>{driver.Team}</Text>
        <View style={Style.Image_container}>
          <Image style={Style.Image} source={{uri: driver.imageUrl}} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DriverCard;
