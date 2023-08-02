/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Input.Style';

const Input = ({value, onType, isSecure}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        placeholder="deneme"
        onChangeText={onType}
        value={value}
        secureTextEntry={isSecure}
      />
    </View>
  );
};

export default Input;
