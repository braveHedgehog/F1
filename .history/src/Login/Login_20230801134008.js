/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, Image} from 'react-native';
import Style from '../SignUp/SignUp.style';
import {Formik} from 'formik';
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
    <SafeAreaView style={Style.container}>
      <Image style={Style.Image} source={require('../assets/F1-logo.png')} />
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
    </SafeAreaView>
  );
};

export default Login;
