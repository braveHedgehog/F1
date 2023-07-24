/* eslint-disable prettier/prettier */
import React from 'react';
import {TextInput, View} from 'react-native';
import Style from './SearchBar.Style';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = props => {
  return (
    <View style={Style.container}>
      <TextInput placeholder="Ara..." onChangeText={props.onSearch} />
      <Icon name="search"  style={Style.Icon} />
    </View>
  );
};

export default SearchBar;
