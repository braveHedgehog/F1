/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import FoodCard from '../../components/FoodCard';

const Food = ({router, navigation}) => {
  const {id} = router.params;
  const {loading, error, data} = useFetch(Config.FOOD_URL + id);

  const renderFood = ({item}) => {
    <FoodCard food={item} onTouch={() => handleSelectFood(item.idMeal)} />;
  };

  function handleSelectFood(idMeal) {
    navigation.navigate('DetailScreen', {idMeal});
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <FlatList
      keyExtractor={item => item.idMeal}
      data={data.meals}
      renderItem={renderFood}
    />
  );
};

export default Food;
