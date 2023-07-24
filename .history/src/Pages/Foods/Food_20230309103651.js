/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import FoodCard from '../../components/FoodCard';
import Config from 'react-native-config';

const Food = ({route, navigation}) => {
  const {category} = route.params;
  const {loading, error, data} = useFetch(
    `${Config.CATEGORY_URL}/catagories/${category}`,
  );

  function handleSelectFood(id) {
    navigation.navigate('DetailScreen', {id});
  }

  const renderFood = ({item}) => {
    <FoodCard food={item} onTouch={() => handleSelectFood(item.id)} />;
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return <FlatList data={data} renderItem={renderFood} />;
};

export default Food;
