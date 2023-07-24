/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';

const Home = async ({navigation}) => {

  const url = 'https://api-formula-1.p.rapidapi.com/seasons';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a8f7b81b2bmsh07dd4bae018d08fp19e18djsn781131703fdf',
      'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com',
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }

  return (
    <View>
      <Text>Home Page</Text>
    </View>
  );
};

export default Home;
