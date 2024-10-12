import { stringifyParams } from './stringifyParams';

type ParamValue = number | string | boolean | number[] | string[] | boolean[];

export type Params = Record<string, ParamValue>;

export const request = async <T>(path: string, params: Params = {}, options?: RequestInit): Promise<T> => {
  const paramsString = (new URLSearchParams(stringifyParams(params))).toString();
  const queryString = paramsString ? '?' + paramsString : '';
  const response = await fetch(path + queryString, options);
  const data = await response.json();
  return data;
};
