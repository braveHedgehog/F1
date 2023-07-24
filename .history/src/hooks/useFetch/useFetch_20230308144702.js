/* eslint-disable prettier/prettier */
import {useEffect, useState} from 'react';
import axios from 'axios';

function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const [data: responseData] = await axios.get(url);
      setData(responseData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {data, loading, error};
}

export default useFetch;
