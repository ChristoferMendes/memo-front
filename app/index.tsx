import { Redirect } from 'expo-router';
import { useEffect, useState } from 'react';

import { useAuth } from '../context/auth';
import { useLoginMutation } from '../hooks/auth/useSignIn/useLoginMutation';
import { getTokenOnAsyncStorage } from '../services/asyncStorage';

const Index = () => {
  const { user } = useAuth();

  useEffect(() => {
    (() => {
      const token = getTokenOnAsyncStorage();

      if (!token) return;
    })();
  }, []);

  return <Redirect href="/login" />;
};
export default Index;
