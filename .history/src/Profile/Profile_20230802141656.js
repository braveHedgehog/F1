/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Style from './Profile.Style';
import auth from '@react-native-firebase/auth';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import parseUserData from '../utils/parsUserData';
import database from '@react-native-firebase/database';

const Profile = ({navigation}) => {
  const [userList, setUserList] = React.useState([]);

  function handleLogOut() {
    auth().signOut();
    navigation.navigate('Home');
  }

  React.useEffect(() => {
    database()
      .ref('user/')
      .on('value', snapshot => {
        const userData = snapshot.val();
        const parsedData = parseUserData(userData || {});
        setUserList(parsedData);
      });
  }, []);
  console.log(userList);
  return (
    <View style={Style.container}>
      <View style={Style.row_container}>
        <Image style={Style.Image} source={require('../assets/F1-logo.png')} />
        <TouchableOpacity style={Style.button} onPress={handleLogOut}>
          <Text style={Style.word}>Log Out</Text>
        </TouchableOpacity>
      </View>
      <ProfileCard profile={userList} />
    </View>
  );
};

export default Profile;
