/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import FoodCard from '../../components/FoodCard';

const Food = ({route, navigation}) => {
  const {id} = route.params;
  const {loading, error, data} = useFetch(`${'http://www.themealdb.com/api/json/v1/1/filter.php?i='}${id}`);

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
