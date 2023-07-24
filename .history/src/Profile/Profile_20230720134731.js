/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Style from './Profile.Style';

const Profile = ({navigation}) => {
  return (
    <View style={Style.container} >
     <View style={Style.row_container} >
     <Image
            style={Style.Image}
            source={require('../assets/F1-logo.png')}
          />
          <TouchableOpacity style={Style.button} onPress={{}}>
          <Text style={Style.word}>Log Out</Text>
        </TouchableOpacity>
     </View>
    </View>
  );
};

export default Profile;
