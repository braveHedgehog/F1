/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import Style from './SignUp.style';

const SignUp = ({navigation}) => {
  return (
    <View style={Style.container}>
      <View style={Style.inner_Container}>
        <Text>Kullanıcı Adınız:</Text>
        <TextInput value="Kullanıcı Adınız:" style={Style.giris} />
        <TextInput value="Mail Adresiniz: " />
        <TextInput value="Şifreniz: " />
      </View>
    </View>
  );
};

export default SignUp;
