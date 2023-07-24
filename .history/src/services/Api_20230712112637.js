/* eslint-disable prettier/prettier */

import Config from "react-native-config";

export const GET = async url => {
  const API_URL = `${Config.BASE_URL}${url}?api_key=${Config.API_KEY}`;

  let response = await fetch(API_URL, {method: 'GET'});
  response = response.json();

  return response;
};
