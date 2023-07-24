/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, TouchableWithoutFeedback, Text} from 'react-native';
import styles from './FoodCard.style';

function FoodCard({food, onTouch}) {
  return (
    <TouchableWithoutFeedback  onPress={onTouch}>
        <View style={styles.container}>
            <Image source={{uri: food.image}} style={styles.image}/>
            <Text style={styles.title}>{food.title}</Text>
        </View>
    </TouchableWithoutFeedback>
  );
}

export default FoodCard;
