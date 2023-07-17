import { User } from '@entities/User/user.base.types';
import { useRouter, useSegments } from 'expo-router';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useMe } from 'src/hooks/auth/useMe';

import { AuthProviderValues } from './types';

const AuthContext = createContext({} as AuthProviderValues);

export function useAuth() {
  return useContext(AuthContext);
}

function useProtectedRoute(user: User | null) {
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)';

    if (!user && !inAuthGroup) {
      router.replace('/login');
    } else if (user && inAuthGroup) {
      router.replace('/home');
    }
  }, [user, segments]);
}

export default function AuthProvider({ children }: { children: JSX.Element }) {
  const [user, setAuth] = useState<User | null>(null);
  const { data } = useMe();

  useEffect(() => {
    if (!data) return;

    setAuth(data.me);
  }, [data]);

  useProtectedRoute(user);

  const signIn = (user: User) => {
    setAuth(user);
  };
  const signOut = () => setAuth(null);
  const values = useMemo(() => ({ user, signIn, signOut }), [user]);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
