/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Style from './DriverCard.style';

const DriverCard = ({navigation}) => {
  return (
    <TouchableOpacity style={Style.container}>
        <View style={Style.inner_Container}>
          <Text style={Style.number}>44</Text>
          <View style={Style.name_container}>
            <Text style={Style.name}>Lewis Hamilton</Text>
            <Text style={Style.country}>United Kingdom</Text>
          </View>
          <Text style={Style.team}>Mercedes AMG Petronas</Text>
          <View style={Style.Image_container}>
          <Image
            style={Style.Image}
            source={require('../../assets/F1-logo.png')}
          />
          </View>
        </View>
    </TouchableOpacity>
  );
};

export default DriverCard;
