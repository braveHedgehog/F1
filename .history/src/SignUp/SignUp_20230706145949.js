/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import Style from './SignUp.style';

const SignUp = ({navigation}) => {
  return (
    <View style={Style.container}>
      <View style={Style.inner_Container}>
        <TextInput name="Kullanıcı Adınız:"/>
        <TextInput name="Mail Adresiniz: " />
        <TextInput name="Şifreniz: " />
        <Button onPress={{
            if(){

            }
        }} />
      </View>
    </View>
  );
};

export default SignUp;
