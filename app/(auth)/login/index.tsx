import { AnimatePresence } from 'moti';
import { Button, ScrollView, Text, VStack, View } from 'native-base';
import { useState } from 'react';

import { LoginDivider } from '../../../components/LoginDivider';
import { LoginForm } from '../../../components/LoginForm';
import { MainBackground } from '../../../components/MainBackground';
import { RegisterForm } from '../../../components/RegisterForm';
import { Poppins_600SemiBold, Poppins_700Bold } from '../../../constants/Fonts';

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);

  const toggleRegister = () => {
    setIsRegister(!isRegister);
  };

  return (
    <View flex={1} bgColor="#1C1C1C">
      <MainBackground link="https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1480268116/content-items/001/786/053/chapter_4_mp_web-original.jpg?1480268116" />
      <ScrollView>
        <VStack mx="8" mt="5">
          <AnimatePresence>{isRegister ? <RegisterForm /> : <LoginForm />}</AnimatePresence>
          <VStack alignItems="center">
            <LoginDivider />
            <Text color="white" fontSize="lg" fontFamily={Poppins_600SemiBold}>
              OR
            </Text>
            <LoginDivider />
          </VStack>
          <Button
            bg="#084E4E"
            borderRadius="lg"
            _text={{ fontFamily: Poppins_700Bold }}
            onPress={toggleRegister}
            mb="5">
            {isRegister ? 'Login' : 'Register'}
          </Button>
        </VStack>
      </ScrollView>
    </View>
  );
}
