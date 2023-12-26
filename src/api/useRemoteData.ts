import {useState, useEffect} from 'react';
import axios, {AxiosError, AxiosRequestConfig} from 'axios';

axios.defaults.baseURL = 'https://us-central1-prueba-front-280718.cloudfunctions.net/challenge-fe';

const useRemoteData = <T>({url, method, headers, data}: AxiosRequestConfig) => {
  const [response, setResponse] = useState<T>();
  const [error, setError] = useState<AxiosError>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .request({url, method, headers, data})
      .then(res => {
        setResponse(res.data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url, method, headers, data]);

  return {response, error, isLoading};
};

export default useRemoteData;