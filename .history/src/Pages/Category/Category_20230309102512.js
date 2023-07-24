/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import CategoryCard from '../../components/CategoryCard';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Category = ({navigation}) => {
  const {loading, data, error} = useFetch(
    `${Config.CATEGORY_URL}/categories.php`,
  );

  function handleSelect(strCategory) {
    navigation.navigate('FoodScreen', {strCategory});
  }

  const renderCategory = ({item}) => {
    return (
      <CategoryCard
        category={item}
        onSelect={() => handleSelect(item.strCategory)}
      />
    );
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <FlatList
      keyExtractor={(item) => item.idCategory}
      data={data.categories}
      renderItem={renderCategory}
    />
  );
};

export default Category;
