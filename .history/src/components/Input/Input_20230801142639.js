/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Input.Style';

const Input = ({placeholder, value, onType, isSecure}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        text={placeholder}
        onChangeText={onType}
        value={value}
        secureTextEntry={isSecure}
        placeholderTextColor={'black'}
      />
    </View>
  );
};

export default Input;
