/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import Style from './TeamCard.Style';

const TeamCard = ({team, onSelect}) => {
  return (
    <View style={Style.container}>
      <TouchableWithoutFeedback onPress={onSelect}>
        <View>
          <View style={Style.inner_container}>
            <Text style={Style.number}>{[team]}</Text>
            <Text style={Style.number}>{team.wins} Wins</Text>
          </View>
          <View style={Style.inner_container}>
            <Text style={Style.number}>{team.name}</Text>
            <Image style={Style.Image} source={{uri: team.logo}} />
          </View>
          <View style={Style.driver}>
            <Text style={Style.number}>{team.firs_driver}</Text>
            <Text style={Style.number}>{team.second_driver}</Text>
          </View>
          <Image style={Style.Image} source={{uri: team.car}} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default TeamCard;
