/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity, Text, TextInput, Image} from 'react-native';
import Style from '../SignUp/SignUp.style';
import {Formik} from 'react-native-formik';

const initialFormValues = {
  email: '',
  Password: '',
};

const Login = () => {

function handleFormSubmit(formValues){
  console.log(formValues);
}

  return (
    <View style={Style.container}>
      <View style={Style.inner_Container}>
        <View style={Style.image_container}>
          <Image
            style={Style.Image}
            source={require('../assets/F1-logo.png')}
          />
        </View>
        <Formik initialValues={initialFormValues} onPress={handleFormSubmit} >
          {({values, handleChange, handleSubmit}) => (
            <>
              <Text style={Style.title}>E-Mail</Text>
              <TextInput name="E-Mail" style={Style.input} value={values.email} onChange={handleChange} >
                <Text>E-Mail</Text>
              </TextInput>
              <Text style={Style.title}>Password</Text>
              <TextInput name="Password" style={Style.input} value={values.email} onChange={handleChange}>
                <Text>Password</Text>
              </TextInput>
              <TouchableOpacity style={Style.button} onPress={handleSubmit}>
                <Text style={Style.word}>Login</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default Login;
