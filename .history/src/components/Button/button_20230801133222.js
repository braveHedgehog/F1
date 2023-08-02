/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, View, Text, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './button.Style';

const Button = ({text, onPress, loading, icon}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color={'black'} />
      ) : (
        <View style={styles.button_container}>
          <Icon name={icon} color="black" size={16} />
          <Text style={styles.title}>{text}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
