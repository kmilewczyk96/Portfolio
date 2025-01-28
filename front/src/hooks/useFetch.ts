import {
  useEffect,
  useState,
} from "react";


export function useFetch(fetchFn: () => Promise<any[]>): [boolean, null | {message: string}, any[]] {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<null | {message: string}>(null);
  const [fetchedData, setFetchedData] = useState<any>([]);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const responseData: any[] = await fetchFn();
        setFetchedData(responseData);
      } catch (e: any) {
        setError(
          {message: e.message || "An error occurred while trying to fetch data!"}
        );
      }
      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]);

  return [isFetching, error, fetchedData];
}
