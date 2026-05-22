import { useEffect, useState } from "react";
import api from "../services/api";

export default function useFetch(url) {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function fetchData() {

      try {

        const response = await api.get(url);

        setData(response.data.results);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    }

    fetchData();

  }, [url]);

  return { data, loading };
}