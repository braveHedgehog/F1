/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Style from './ProfileCard.Style';

const ProfileCard = ({profile, onPress}) => {

  return (
    <View style={Style.container}>
      <View style={Style.inner_container}>
        <Text style={Style.Personal} >Personal Information</Text>
        <View style={Style.align} >
          <Text style={Style.title}>E-Mail: </Text>
          <Text style={Style.content}>{profile.email}</Text>
          <TouchableOpacity style={Style.edit} onPress={onPress}>
          <Text style={Style.edit_word}>Edit</Text>
        </TouchableOpacity>
        </View>
        <Image
        style={Style.car}
        source={{ uri: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/ferrari.png.transform/6col/image.png'}}
      />
      </View>
    </View>
  );
};

export default ProfileCard;
