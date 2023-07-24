/* eslint-disable prettier/prettier */

async function useFetch() {
  const url = 'https://api-formula-1.p.rapidapi.com/driver?search=';
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
}

export default useFetch;
