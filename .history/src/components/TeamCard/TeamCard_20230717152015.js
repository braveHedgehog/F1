/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import Style from './TeamCard.Style';

const TeamCard = () => {
  return (
    <TouchableWithoutFeedback>
      <View style={Style.container}>
        <View style={Style.inner_container}></View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TeamCard;
