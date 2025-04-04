
// new 
import { useEffect, useState } from "react";
import { token } from "../config.js";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      let authToken = token || localStorage.getItem("token");

      if (!authToken) {
        setError("No token found! Please log in.");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${authToken}` },
        });

        const result = await res.json();

        if (res.status === 401) {
          const refreshToken = localStorage.getItem("refreshToken");
          if (refreshToken) {
            const refreshRes = await fetch("/api/refresh", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ refreshToken }),
            });
            const refreshData = await refreshRes.json();

            if (refreshRes.ok) {
              localStorage.setItem("token", refreshData.token);
              authToken = refreshData.token;
              return fetchData(); // Retry request
            } else {
              throw new Error("Session expired, please log in again.");
            }
          }
        }

        if (!res.ok) {
          throw new Error(result.message || "Something went wrong! 🤢");
        }

        setData(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
