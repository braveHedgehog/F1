/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import Style from './SignUp.style';

const SignUp = ({navigation}) => {
  return (
    <View style={Style.container}>
      <View style={Style.inner_Container}>
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
        <Button title="Sign Up" style={Style.button} onPress={{}} />
      </View>
    </View>
  );
};

export default SignUp;
