/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, Image, View} from 'react-native';
import Style from '../SignUp/SignUp.style';
import {Formik} from 'react-native-formik';
import Input from '../components/Input/Input';
import Button from '../components/Button/button';

const initialFormValues = {
  email: '',
  Password: '',
};

const Login = () => {
  function handleFormSubmit(formValues) {
    console.log(formValues);
  }

  return (
    <View style={Style.container}>
        <View style={Style.image_container}>
          <Image
            style={Style.Image}
            source={require('../assets/F1-logo.png')}
          />
        </View>
        <Text style={Style.title}>E-Mail</Text>
        <TextInput name="E-Mail" style={Style.input}>
          <Text>E-Mail</Text>
        </TextInput>
        <Text style={Style.title}>Password</Text>
        <TextInput name="Password" style={Style.input}>
          <Text>Password</Text>
        </TextInput>
        <TouchableOpacity style={Style.button} onPress={{}}>
          <Text style={Style.word}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
