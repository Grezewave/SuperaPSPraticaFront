import axios, { AxiosResponse } from 'axios';

export type Params = {
  startTime?: string,
  endTime?: string,
  operatorName?: string,
};

const url = 'http://127.0.0.1:8080/client/1/statement';

export const getStatement = (params: Params) => {
  console.log(params)
  return axios.get(url, { params })
}
