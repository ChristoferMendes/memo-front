import { ApolloProvider } from '@apollo/client';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { useMe } from '@hooks/auth/useMe';
import { usePromise } from '@hooks/usePromise';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Apollo } from '@services/apollo';
import { getTokenOnAsyncStorage } from '@services/asyncStorage';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { NativeBaseProvider } from 'native-base';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';

import AuthProvider from '../context/auth';
import { useToken } from '../store/token';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const { data: token } = usePromise(getTokenOnAsyncStorage());
  const { setToken } = useToken();

  useEffect(() => {
    if (!token) return;

    setToken(token);
  }, [token]);

  const client = Apollo();

  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <NativeBaseProvider>
          <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack>
              <Stack.Screen name="(auth)/login/index" options={{ headerShown: false }} />
              <Stack.Screen name="home/index" options={{ headerShown: false }} />
              <Stack.Screen name="home/documents/index" options={{ headerShown: false }} />
              <Stack.Screen name="home/cards/index" options={{ headerShown: false }} />
            </Stack>
          </ThemeProvider>
        </NativeBaseProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}
