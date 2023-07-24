/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image} from 'react-native';
import Style from './NewsCard.Style';

const NewsCard = news => {
  return (
    <View style={Style.conyainer}>
      <Image style={Style.Image} source={{uri: news.news_image}} />
    </View>
  );
};

export default NewsCard;
