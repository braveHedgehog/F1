/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, Image} from 'react-native';
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
        <Image style={Style.Image} source={require('../assets/F1-logo.png')} />
      </View>
      <Formik initialValues={initialFormValues} onPress={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              placeholder="E-mail"
              value={values.email}
              onType={handleChange}
            />
            <Input
              placeholder="Password"
              value={values.Password}
              onType={handleChange}
            />
            <Button text="Log In" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </View>
  );
};

export default Login;
