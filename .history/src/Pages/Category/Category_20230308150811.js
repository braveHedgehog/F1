/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import CategoryCard from '../../components/CategoryCard';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Category = () => {
  const {loading, data, error} = useFetch(Config.CATEGORY_URL);

  const renderCategory = ({item}) => {
    return <CategoryCard category={item} />;
  };

  console.log(Config.CATEGORY_URL);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return <FlatList
  keyExtractor={item.idCategory}
  data={data} renderItem={renderCategory} />;
};

export default Category;
