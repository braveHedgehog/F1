/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import Style from './TeamCard.Style';

const TeamCard = ({team, onSelect}) => {
  return (
    <View style={Style.container}>
      <TouchableWithoutFeedback onPress={onSelect}>
        <View style={Style.team}>
          <View style={Style.inner_container}>
            <Text style={Style.number}>{team.id}</Text>
          </View>
          <View style={Style.inner_container}>
            <Text style={Style.name}>{team.name}</Text>
            <View style={Style.logo_container}>
            <Image style={Style.logo} source={{uri: team.logo}} />
            </View>
          </View>
          <View style={Style.driver_container}>
            <Text style={Style.driver}>{team.firs_driver}</Text>
            <Text style={Style.second_driver}>{team.second_driver}</Text>
          </View>
          <Image style={Style.car} source={{uri: team.car}} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default TeamCard;
