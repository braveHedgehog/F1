/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import Style from './DriverCard.style';

const DriverCard = ({driver, onSelect}) => {
  return (
    <View style={Style.container}>
      <TouchableWithoutFeedback onPress={onSelect}>
        <View style={Style.inner_Container}>
          <Text style={Style.number}>{driver.Driver_Number}</Text>
          <Text style={Style.name}>{driver.name}</Text>
          <View style={Style.Image_container}>
            <Image
              style={Style.country_image}
              source={{uri: driver.country_url}}
            />
          </View>
          <Text style={Style.team}>{driver.Team}</Text>
          <View style={Style.Image_container} >
            <Image style={Style.Image} source={{uri: driver.imageUrl}} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default DriverCard;
