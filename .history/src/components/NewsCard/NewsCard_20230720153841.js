/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image} from 'react-native';
import Style from './NewsCard.Style';

const NewsCard = props => {
  return (
    <View style={Style.container}>
      <View style={Style.align}>
        <Image style={Style.Image} source={{uri: props.news.news_image}} />
            <Text style={Style.title} >{props.news.news_head}</Text>
            <Text style={Style.content} >{props.news.news_content}</Text>
      </View>
    </View>
  );
};

export default NewsCard;
