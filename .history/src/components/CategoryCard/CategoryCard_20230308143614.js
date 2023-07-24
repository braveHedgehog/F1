/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './CategoryCard.style';

const CategoryCard = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image}/>
      <Text style={styles.title}></Text>
    </View>
  );
};

export default CategoryCard;
