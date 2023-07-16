import { useEffect, useState } from 'react';

export const usePromise = <T>(promise: Promise<T>) => {
  const [data, setData] = useState<T>();

  const resolvePromise = async () => {
    const result = await promise;
    setData(result);
  };

  useEffect(() => {
    if (data) return;

    resolvePromise();
  }, [promise]);

  return { data };
};
