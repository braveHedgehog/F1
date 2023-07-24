/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import FoodCard from '../../components/FoodCard';
import Config from 'react-native-config';

const Food = ({route, navigation}) => {
  const {strCategory} = route.params;
  const {loading, error, data} = useFetch(
    `${Config.CATEGORY_URL}/filter.php?i=${strCategory}`,
  );

  function handleSelectFood(idMeal) {
    navigation.navigate('DetailScreen', {idMeal});
  }

  const renderFood = ({item}) => {
    <FoodCard food={item} onSelect={() => handleSelectFood(item.idMeal)} />;
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <FlatList
      //keyExtractor={(item) => item.idMeal}
      data={data.meals}
      renderItem={renderFood}
    />
  );
};

export default Food;
