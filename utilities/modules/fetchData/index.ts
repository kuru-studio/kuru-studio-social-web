// ANCHOR: SWR
import useSWR from "swr";

// ANCHOR: MD5
import md5 from 'md5';

export function fetchData(definition, request, variable) {
  return useSWR(md5(definition), () => request(variable));
}
