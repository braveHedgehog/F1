/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import Style from './SignUp.style';

const SignUp = ({navigation}) => {
  return (
    <View style={Style.container}>
      <View style={Style.inner_Container}>
        <Text>Kullanıcı Adı</Text>
        <TextInput value="Kullanıcı Adınız" style={Style.input} />
        <Text>Mail</Text>
        <TextInput value="Mail Adresiniz " style={Style.input}/>
        <Text>Şİfre</Text>
        <TextInput value="Şifreniz " style={Style.input}/>
      </View>
    </View>
  );
};

export default SignUp;
