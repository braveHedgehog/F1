/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import Style from './TeamStanding.Style';

const TeamStanding = props => {
  return (
    <View style={Style.container} >
     <View style={Style.align}>
      <Text style={Style.number}>{props.driver.id}</Text>
      <Text style={Style.name}>{props.driver.name}</Text>
      <Text style={Style.points}>{props.driver.points}</Text>
     </View>
    </View>
  );
};

export default TeamStanding;
