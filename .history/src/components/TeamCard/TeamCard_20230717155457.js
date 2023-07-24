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
            <Text style={Style.wins}>{team.wins} Wins</Text>
          </View>
          <View style={Style.inner_container}>
            <Text style={Style.name}>{team.name}</Text>
            <Image style={Style.logo} source={{uri: team.logo}} />
          </View>
          <View style={Style.driver}>
            <Text style={Style.driver}>{team.firs_driver}</Text>
            <Text style={Style.driver}>{team.second_driver}</Text>
          </View>
          <Image style={Style.car} source={{uri: team.car}} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default TeamCard;
