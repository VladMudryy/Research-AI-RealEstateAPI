import { useState } from "react";
import axios, { Method } from "axios";

interface ApiResponse<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
}

const useApiCall = <T>() => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const makeApiCall = async (url: string, method: Method, data?: any): Promise<ApiResponse<T>> => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios({
        method,
        url,
        data
      });
      return { data: response.data, error: null, loading: false };
    } catch (error) {
      setError(error as Error);
      return { data: null, error: error as Error, loading: false };
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, makeApiCall };
};

export default useApiCall;
