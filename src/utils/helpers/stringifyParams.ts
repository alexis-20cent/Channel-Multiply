import { Params } from "./request";

export const stringifyParams = (params: Params) => Object.entries(params).map(([key, value]) => [key, value.toString()]);
