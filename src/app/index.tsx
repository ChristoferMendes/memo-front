import { useEffect } from 'react';

import { useAuth } from '../context/auth';
import { getTokenOnAsyncStorage } from '../services/asyncStorage';

const Index = () => {
  const { user, signIn } = useAuth();

  useEffect(() => {
    (() => {
      const token = getTokenOnAsyncStorage();

      if (!token || !user) return;

      console.log(user);
      signIn(user);
    })();
  }, [user]);

  return <></>;
};
export default Index;
