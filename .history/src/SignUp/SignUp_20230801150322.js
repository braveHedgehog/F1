/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import Style from './SignUp.style';
import {Formik} from 'formik';
import Input from '../components/Input/Input';
import Button from '../components/Button/button';

const initialFormValues = {
  name: '',
  surname: '',
  username: '',
  email: '',
  Password: '',
};

const SignUp = ({navigation}) => {

  function handleFormSubmit(formValues) {
    console.log(formValues);
  }

  return (
    <View style={Style.container}>
      <View style={Style.inner_Container} >
      <View style={Style.image_container}>
        <Image style={Style.Image} source={require('../assets/F1-logo.png')} />
      </View>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              onType={handleChange('name')}
              value={values.name}
              placeholder="Name"
              isSecure={false}
            />
            <Input
              onType={handleChange('surname')}
              value={values.surname}
              placeholder="Surname"
              isSecure={false}
            />
            <Input
              onType={handleChange('username')}
              value={values.username}
              placeholder="username"
              isSecure={false}
            />
            <Input
              onType={handleChange('email')}
              value={values.email}
              placeholder="E-mail"
              isSecure={false}
            />
            <Input
              onType={handleChange('Password')}
              value={values.Password}
              placeholder="Password"
              isSecure={true}
            />
            <Button text="Log In" onPress={handleSubmit} />
          </>
        )}
      </Formik>
      </View>
    </View>
  );
};

export default SignUp;




/*
 <Text style={Style.title}>Name</Text>
      <TextInput name="Name" style={Style.input}>
        <Text>Name</Text>
      </TextInput>
      <Text style={Style.title}>Surname</Text>
      <TextInput name="Surname" style={Style.input}>
        <Text>Surname</Text>
      </TextInput>
      <Text style={Style.title}>User Name</Text>
      <TextInput name="User Name" style={Style.input}>
        <Text>User Name</Text>
      </TextInput>
      <Text style={Style.title}>E-Mail</Text>
      <TextInput name="E-Mail" style={Style.input}>
        <Text>E-Mail</Text>
      </TextInput>
      <Text style={Style.title}>Password</Text>
      <TextInput name="Password" style={Style.input}>
        <Text>Password</Text>
      </TextInput>
      <TouchableOpacity style={Style.button} onPress={{}}>
        <Text style={Style.word}>Sign Up</Text>
      </TouchableOpacity>
*/