/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */

import axios from 'axios';

const options =  {
  method: 'GET',
  url: 'https://api-formula-1.p.rapidapi.com/drivers',
  params: {id: id},
  headers: {
    'X-RapidAPI-Key': 'a8f7b81b2bmsh07dd4bae018d08fp19e18djsn781131703fdf',
    'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com',
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
