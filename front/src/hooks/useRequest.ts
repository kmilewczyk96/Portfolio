import {
  useCallback,
  useEffect,
  useState,
} from "react";

import {httpRequestMethods} from "@/utils/enums.ts";
import {IURL} from "@/utils/interfaces.ts";


const defaultConfig = {}
export function useRequest(
  {url, method, config=defaultConfig}: IURL)
  : [boolean, null | {message: string}, any[], () => {}] {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<null | {message: string}>(null);
  const [fetchedData, setFetchedData] = useState<any>([]);


  const sendRequest = useCallback(async function sendRequest(data?: object) {
    // This function will be returned and should only be called from outside unless http method is "GET".
    if (data) {
      config.body = data;
    }
    async function fetchData() {
      setIsFetching(true);
      try {
        const response: Response = await fetch(url, {
          ...config,
          method: method,
        });
        const responseData = await response.json();
        setFetchedData(responseData);
      } catch (e: any) {
        setError(
          {message: e.message || "An error occurred while trying to fetch data!"}
        );
      }
      setIsFetching(false);
    }

    await fetchData();
  }, [url, method, config]);

  useEffect(() => {
    if (method === httpRequestMethods.get) {
      void sendRequest();
    }
  }, [sendRequest]);


  return [isFetching, error, fetchedData, sendRequest];
}
