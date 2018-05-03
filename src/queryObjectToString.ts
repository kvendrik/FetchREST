import * as qs from 'qs';

export interface QueryObject {
  [key: string]: any;
}

export default function queryObjectToString(queryObject: QueryObject) {
  const queryString = qs.stringify(queryObject);

  if (queryString.length < 1) {
    return '';
  }

  return `?${queryString}`;
}
