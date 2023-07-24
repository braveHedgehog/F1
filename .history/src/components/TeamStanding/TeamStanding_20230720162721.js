/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import Style from './TeamStanding.Style';

const TeamStanding = props => {
  return (
    <View style={Style.container} >
     <View style={Style.align}>
      <Text style={Style.number}>{props.team.id}</Text>
      <Text style={Style.name}>{props.team.name}</Text>
      <Text style={Style.driver}>{props.team.firs_driver}</Text>
      <Text style={Style.driver}>{props.team.second_driver}</Text>
      <Text style={Style.points}>{props.team.season_points}</Text>
     </View>
    </View>
  );
};

export default TeamStanding;
