/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import FoodCard from '../../components/FoodCard';

function Food({router, navigation}) {
  const {food} = router.params;
  const {loading, error, data} = useFetch(Config.API_URL + food);

  if (loading) {
    return <Loading />;
  }

  const renderFood = ({item}) => {
    <FoodCard food={item} onTouch={() => handleSelectFood(item.idMeal)} />;
  };

  function handleSelectFood(idMeal){
    navigation.navigate('DetailScreen', {idMeal});
  }

  if (error) {
    return <Error />;
  }

  return <FlatList data={data.meals} renderItem={renderFood}/>;
}

export default Food;
