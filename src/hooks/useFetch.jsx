import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const API_KEY = "171555b9f2cca248e5808efe85d8f36c";
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${API_KEY}&query=${queryTerm}`;

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();
  }, [url]);

  return { data };
};
