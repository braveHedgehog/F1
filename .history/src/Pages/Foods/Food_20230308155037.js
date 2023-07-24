/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import styles from './Food.style';

function Food({router, navigation}) {
  return (
    <FlatList />
  );
}

export default Food;
