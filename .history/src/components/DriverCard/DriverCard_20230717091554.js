/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import Style from './DriverCard.style';


const DriverCard = ({props, onSelect}) => {

  

  return (
    <View style={Style.container}>
      <TouchableWithoutFeedback onPress={onSelect}>
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
    </View>
  );
};

export default DriverCard;
