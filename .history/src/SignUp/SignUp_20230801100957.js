/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import Style from './SignUp.style';

const SignUp = ({navigation}) => {

  return (
    <View style={Style.container}>
      <View style={Style.inner_Container}>
        <View style={Style.image_container}>
          <Image
            style={Style.Image}
            source={require('../assets/F1-logo.png')}
          />
        </View>
        <Text style={Style.title}>Name</Text>
        <TextInput name="Name" style={Style.input}>
          <Text>Name</Text>
        </TextInput>
        <Text style={Style.title}>Surname</Text>
        <Text style={Style.title}>E-Mail</Text>
        <TextInput name="E-Mail" style={Style.input}>
          <Text>E-Mail</Text>
        </TextInput>
        <Text style={Style.title}>Password</Text>
        <TextInput name="Password" style={Style.input}>
          <Text>Password</Text>
        </TextInput>
        <TouchableOpacity style={Style.button} onPress={{}}>
          <Text style={Style.word}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
