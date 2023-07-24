/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './CategoryCard.style';

const CategoryCard = ({category}) => {
console.log(category.image);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: category.image}} />
      <Text style={styles.title}>{category.title}</Text>
    </View>
  );
};

export default CategoryCard;
