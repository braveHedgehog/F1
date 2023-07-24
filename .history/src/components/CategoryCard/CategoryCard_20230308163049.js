/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import styles from './CategoryCard.style';

const CategoryCard = ({category, onSelect}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Image style={styles.image} source={{uri: category.strCategoryThumb}} />
        <Text style={styles.title}>{category.strCategory}</Text>
      </View>
      <Button onPress={onSelect} title="Deneme" />
    </View>
  );
};

export default CategoryCard;
