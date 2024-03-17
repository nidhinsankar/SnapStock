import { useEffect, useState } from "react";

export const useFetch = (apiUri: string) => {
  const [data, setData] = useState();

  const fetchApi = async () => {
    const api = await fetch(apiUri);
    const data = await api.json();
    return data;
  };
  useEffect(() => {
    fetchApi().then((data) => setData(data));
  }, []);

  return data;
};
