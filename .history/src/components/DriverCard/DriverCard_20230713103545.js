/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import Style from './DriverCard.style';

const DriverCard = props => {
  return (
    <TouchableWithoutFeedback style={Style.container}>
      <View style={Style.inner_Container}>
        <Text style={Style.number}>{props.driver.Driver_Number}</Text>
        <Text style={Style.name}>{props.driver.name}</Text>
        <Text style={Style.country}>{props.driver.Country}</Text>
        <Text style={Style.team}>{props.driver.Team}</Text>
        <View style={Style.Image_container}>
          <Image style={Style.Image} source={{uri: props.driver.imageUrl}} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DriverCard;
