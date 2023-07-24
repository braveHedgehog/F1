/* eslint-disable prettier/prettier */
import React from 'react';
import {TextInput, View} from 'react-native';
import Styles from './SearchBar.Style';

const SearchBar = props => {
  return (
    <View style={Styles.container}>
      <TextInput placeholder="Ara..." onChangeText={props.onSearch} />
    </View>
  );
};

export default SearchBar;
