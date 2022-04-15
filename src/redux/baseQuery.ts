import { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, {
  AxiosRequestConfig,
  AxiosError,
  AxiosRequestHeaders
} from 'axios';

export default (
    { baseUrl }: { baseUrl: string } = {
      baseUrl: 'https://api.pokemontcg.io/v2/'
    }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const headers: AxiosRequestHeaders = {
        XApiKey: process.env.API_KEY || ''
      };
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message
        }
      };
    }
  };
