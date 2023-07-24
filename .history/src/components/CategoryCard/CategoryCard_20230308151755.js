/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './CategoryCard.style';

const CategoryCard = ({category}) => {

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: category.strCategoryThumb}} />
      <Text style={styles.title}>{category.strCategory}</Text>
    </View>
  );
};

export default CategoryCard;
