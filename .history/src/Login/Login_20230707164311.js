/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity, Text, TextInput, Image} from 'react-native';
import Style from '../SignUp/SignUp.style';

const Login = ({navigation}) => {
  return (
    <View style={Style.container}>
      <View style={Style.inner_Container}>
        <View style={Style.image_container}>
          <Image
            style={Style.Image}
            source={require('../assets/F1-logo.png')}
          />
        </View>
        <Text style={Style.title}>E-Mail</Text>
        <TextInput name="E-Mail" style={Style.input} />
        <Text style={Style.title}>Password</Text>
        <TextInput value="Password" style={Style.input} />
        <TouchableOpacity style={Style.button} onPress={{}}>
          <Text style={Style.word}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;