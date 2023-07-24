/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import styles from './FoodCard.style';

function FoodCard({food, onTouch}) {
  return (
    <TouchableOpacity  onPress={onTouch}>
        <View style={styles.container}>
            <Image source={{uri: food.strMealThumb}} style={styles.image}/>
            <Text style={styles.title}>{food.strMeal}</Text>
        </View>
    </TouchableOpacity>
  );
}

export default FoodCard;
