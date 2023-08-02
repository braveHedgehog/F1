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
  function User({userId}) {
    React.useEffect(() => {
      const onValueChange = database()
        .ref(`/users/${userId}`)
        .on('value', snapshot => {
          console.log('User data: ', snapshot.val());
        });
      return () =>
        database().ref(`/users/${userId}`).off('value', onValueChange);
    }, [userId]);
  }
  return (
    <View style={Style.container}>
      <View style={Style.row_container}>
        <Image style={Style.Image} source={require('../assets/F1-logo.png')} />
        <TouchableOpacity style={Style.button} onPress={handleLogOut}>
          <Text style={Style.word}>Log Out</Text>
        </TouchableOpacity>
      </View>
      <ProfileCard profile={User} />
    </View>
  );
};

export default Profile;
