import { useRouter, useSegments } from 'expo-router';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { AuthProviderValues } from './types';
import { User } from '../../hooks/auth/useSignIn/useLoginMutation/types';

const AuthContext = createContext({} as AuthProviderValues);

export function useAuth() {
  return useContext(AuthContext);
}

function useProtectedRoute(user: any) {
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

export function AuthProvider({ children }: { children: JSX.Element }) {
  const [user, setAuth] = useState<User | null>(null);
  console.log(user);

  useProtectedRoute(user);

  const signIn = (user: User) => setAuth(user);
  const signOut = () => setAuth(null);
  const values = useMemo(() => ({ user, signIn, signOut }), [user]);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
