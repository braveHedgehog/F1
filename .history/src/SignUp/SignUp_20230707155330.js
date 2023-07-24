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
      <Text style={Style.title} >Name</Text>
        <TextInput value="Name" style={Style.input} />
        <Text style={Style.title} >Surname</Text>
        <TextInput value="Surname" style={Style.input} />
        <Text style={Style.title} >User Name</Text>
        <TextInput value="User Name" style={Style.input} />
        <Text style={Style.title}>E-Mail</Text>
        <TextInput value="E-Mail" style={Style.input}/>
        <Text style={Style.title}>Password</Text>
        <TextInput value="Password" style={Style.input}/>
        <TouchableOpacity style={Style.button} onPress={{}}>
        <Text style={Style.word}>Sign Up</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;