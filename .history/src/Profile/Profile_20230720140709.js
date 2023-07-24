/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Style from './Profile.Style';

const Profile = ({navigation}) => {
  return (
    <View style={Style.container}>
      <View style={Style.row_container}>
        <Image style={Style.Image} source={require('../assets/F1-logo.png')} />
        <TouchableOpacity style={Style.button} onPress={{}}>
          <Text style={Style.word}>Log Out</Text>
        </TouchableOpacity>
      </View>
      <View style={Style.inner_container}>
        <Text style={Style.Personal} >Personal Information</Text>
        <View style={Style.align} >
          <Text style={Style.title}>Name: </Text>
          <Text style={Style.content}>Yiğit Kirpi</Text>
          <TouchableOpacity style={Style.edit} onPress={{}}>
          <Text style={Style.edit_word}>Edit</Text>
        </TouchableOpacity>
        </View>
        <View style={Style.align} >
          <Text style={Style.title}>User Name: </Text>
          <Text style={Style.content}>braveHedgehog</Text>
          <TouchableOpacity style={Style.edit} onPress={{}}>
          <Text style={Style.edit_word}>Edit</Text>
        </TouchableOpacity>
        </View>
        <View style={Style.align} >
          <Text style={Style.title}>E-Mail: </Text>
          <Text style={Style.content}>yigitkirpicik@gmail.com</Text>
          <TouchableOpacity style={Style.edit} onPress={{}}>
          <Text style={Style.edit_word}>Edit</Text>
        </TouchableOpacity>
        </View>
        <View style={Style.align} >
          <Text style={Style.title}>Password: </Text>
          <Text style={Style.content}>*********</Text>
          <TouchableOpacity style={Style.edit} onPress={{}}>
          <Text style={Style.edit_word}>Edit</Text>
        </TouchableOpacity>
        </View>
        <Image
        style={Style.car}
        source={require('https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/ferrari.png.transform/6col/image.png')}
      />
      </View>
    </View>
  );
};

export default Profile;
