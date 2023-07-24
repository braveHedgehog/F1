/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import Style from './TeamCard.Style';

const TeamCard = () => {
  return (
    <View style={Style.container}>
      <TouchableWithoutFeedback>
        <View style={Style.inner_container}></View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default TeamCard;
