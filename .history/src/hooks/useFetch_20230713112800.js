/* eslint-disable prettier/prettier */
import {useEffect, useState} from 'react';
import axios from 'axios';
function useFetch() {
  const [data, setData] = useState([]);

  const fetchData = async (driver_data) => {
    try {
      const {data: responseData} = await axios.get(driver_data);
      setData(responseData);
    } catch (err) {
     console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {data};
}

export default useFetch;
