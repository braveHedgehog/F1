/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Image, SafeAreaView} from 'react-native';
import Style from './Login.Style';
import {Formik} from 'formik';
import Input from '../components/Input/Input';
import Button from '../components/Button/button';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';
import auth from '@react-native-firebase/auth';

const initialFormValues = {
  email: '',
  Password: '',
};

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  async function handleFormSubmit(formValues) {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.email,
        formValues.password,
      );
      navigation.navigate('Home');
      setLoading(false);
    } catch (error) {
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'info',
      });
        setLoading(false);
    }
  }
  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.image_container}>
        <Image style={Style.Image} source={require('../assets/F1-logo.png')} />
      </View>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
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
            <Button text="Log In" onPress={handleSubmit} loading={loading} />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;

/*
 <View style={Style.inner_Container}>
              <TextInput
                name="E-Mail"
                style={Style.input}
                onChangeText={handleChange('email')}
                value={values.email}>
                <Text>E-Mail</Text>
              </TextInput>
              <TextInput
                name="Password"
                style={Style.input}
                onChangeText={handleChange('email')}
                value={values.email}>
                <Text>Password</Text>
              </TextInput>
              <TouchableOpacity style={Style.button} onPress={handleSubmit}>
                <Text style={Style.word}>Login</Text>
              </TouchableOpacity>
              </View>
*/
