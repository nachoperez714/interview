import axios from 'axios';
import type { Image } from './types';

const baseUrl = 'https://us-central1-prueba-front-280718.cloudfunctions.net/challenge-fe'

type GetImageResponse = {
    data: Image[];
  };

export const getImages = async () => {
    try {
      const { data, status } = await axios.get<GetImageResponse>('baseUrl', {},);

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }