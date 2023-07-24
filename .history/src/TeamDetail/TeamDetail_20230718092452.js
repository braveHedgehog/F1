/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Style from './TeamDetail.Style';

const TeamDetail = navigation => {
  return (
    <ScrollView style={Style.page} >
      <View style={Style.container} >
        <Text>Deneme</Text>
      </View>
    </ScrollView>
  );
};

export default TeamDetail;
