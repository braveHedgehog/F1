/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Input.Style';

const Input = ({placeholder, value, onType}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        placeholder={placeholder}
        onChangeText={onType}
        value={value}
        placeholderTextColor={'black'}
      />
    </View>
  );
};

export default Input;
