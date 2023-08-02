/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
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
      .ref('user/').key(auth().currentUser)
      .on('value', snapshot => {
        const userData = snapshot.val();
        const parsedData = parseUserData(userData || {});
        setUserList(parsedData);
      });
  }, []);
  console.log(userList);
  const renderUser = ({item}) => <ProfileCard profile={item} />;
  return (
    <View style={Style.container}>
      <View style={Style.row_container}>
        <Image style={Style.Image} source={require('../assets/F1-logo.png')} />
        <TouchableOpacity style={Style.button} onPress={handleLogOut}>
          <Text style={Style.word}>Log Out</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={userList} renderItem={renderUser} />
    </View>
  );
};

export default Profile;
