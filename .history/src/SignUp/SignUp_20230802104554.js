/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import {View, Image, ScrollView} from 'react-native';
import Style from './SignUp.style';
import {Formik} from 'formik';
import Input from '../components/Input/Input';
import Button from '../components/Button/button';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../utils/authErrorMessageParser';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const initialFormValues = {
  name: '',
  surname: '',
  username: '',
  email: '',
  Password: '',
};

const SignUp = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  async function handleFormSubmit(formValues) {
    try {
      setLoading(true);
      await auth().createUserWithEmailAndPassword(
        formValues.email,
        formValues.Password,
        formValues.username,
        formValues.surname,
        formValues.name,
      );
      showMessage({
        message: 'User is Created',
        type: 'success',
      });
      navigation.navigate('Login');
      setLoading(false);
      sendUser(formValues);
    } catch (error) {
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'info',
      });
      setLoading(false);
    }
  }
  function handleSignUp() {
    navigation.navigate('LogIn');
}

  function sendUser(user){
    const userObject = {
      username: user.username,
      name:user.name,
      surname: user.surname,
      email: user.email,
      password: user.Password,
    };

    database().ref('user/').push(userObject);
  }

  return (
    <ScrollView style={Style.container}>
      <View style={Style.inner_Container}>
        <View style={Style.image_container}>
          <Image
            style={Style.Image}
            source={require('../assets/F1-logo.png')}
          />
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
              <Button text="Sign Up" onPress={handleSubmit} loading={loading} />
            </>
          )}
        </Formik>
        <Button text="Log In" onPress={handleSignUp} />
      </View>
    </ScrollView>
  );
};

export default SignUp;
