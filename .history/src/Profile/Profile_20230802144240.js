/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import Style from './Profile.Style';
import auth from '@react-native-firebase/auth';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import parseUserData from '../utils/parsUserData';
import database from '@react-native-firebase/database';

const Profile = ({navigation}) => {
  function handleLogOut() {
    auth().signOut();
    navigation.navigate('Home');
  }
  const user = auth().currentUser();
  console.log(user);

  return (
    <View style={Style.container}>
      <View style={Style.row_container}>
        <Image style={Style.Image} source={require('../assets/F1-logo.png')} />
        <TouchableOpacity style={Style.button} onPress={handleLogOut}>
          <Text style={Style.word}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
