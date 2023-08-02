/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Style from './Profile.Style';
import auth from '@react-native-firebase/auth';
import ProfileCard from '../components/ProfileCard/ProfileCard';

const Profile = ({navigation}) => {
  function handleLogOut() {
    auth().signOut();
    navigation.navigate('Home');
  }

  function handleEdit() {
    navigation.navigate('Edit');
  }

  return (
    <View style={Style.container}>
      <View style={Style.row_container}>
        <Image style={Style.Image} source={require('../assets/F1-logo.png')} />
        <TouchableOpacity style={Style.button} onPress={handleLogOut}>
          <Text style={Style.word}>Log Out</Text>
        </TouchableOpacity>
      </View>
      <ProfileCard profile={auth().currentUser} onPress={handleEdit} />
    </View>
  );
};

export default Profile;
