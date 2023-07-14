import { DEFAULT_ERROR_MESSAGE } from '@constants/DefaultErrorMessage';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { storeTokenOnAsyncStorage } from '@services/asyncStorage';
import { useFocusEffect } from 'expo-router';
import { MotiView } from 'moti';
import { Button, Icon } from 'native-base';
import Form from 'native-base-formify';
import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { User, UserSchema } from '../../app/(auth)/login/schema';
import { Montserrat_500Medium, Poppins_500Medium, Poppins_700Bold } from '../../constants/Fonts';
import { useAuth } from '../../context/auth';
import { useLoginMutation } from '../../hooks/auth/useLoginMutation';
import { useBooleanState } from '../../hooks/useBooleanState';
import { loadingVerification } from '../../utils/loadingVerification';
import { tryCatch } from '../../utils/tryCatch';

const labelTextProps = {
  _text: { fontFamily: Poppins_500Medium, color: 'white' },
};

export function LoginForm() {
  const {
    control,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm<User>({
    resolver: zodResolver(UserSchema),
  });
  const [isPasswordOn, setIsPasswordOn] = useState(true);
  const [login] = useLoginMutation(setError);
  const [isLoading, onOpen, onClose] = useBooleanState();
  const { signIn } = useAuth();

  const onLogin = async (data: User) => {
    onOpen();
    const [result, error] = await tryCatch(login(data.email, data.password));

    if (error || !result?.data) {
      onClose();
      return setError('email', { message: DEFAULT_ERROR_MESSAGE });
    }

    storeTokenOnAsyncStorage(result.data.login.token);
    signIn(result.data.login.user);
  };

  const memoizedOnClose = useCallback(onClose, []);

  useFocusEffect(memoizedOnClose);

  return (
    <MotiView
      from={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ type: 'timing', duration: 600 }}>
      <Form control={control} errors={errors}>
        <Form.Input
          name="email"
          label="Email"
          borderRadius={0}
          borderBottomRightRadius={50}
          borderWidth="0"
          placeholder="your_name@gmail.com"
          backgroundColor="white"
          _labelProps={labelTextProps}
          fontFamily={Montserrat_500Medium}
        />
        <Form.Input
          name="password"
          label="Password"
          type={isPasswordOn ? 'password' : 'text'}
          bgColor="white"
          borderWidth="0"
          _labelProps={{ mt: '5' }}
          borderRadius="none"
          placeholder={isPasswordOn ? '***********' : 'my_password'}
          fontFamily={Montserrat_500Medium}
          rightElement={
            <Icon
              onPress={() => setIsPasswordOn((prev) => !prev)}
              as={<MaterialCommunityIcons name={isPasswordOn ? 'eye-minus' : 'eye-check'} />}
              mr="3"
              size="7"
            />
          }
        />
      </Form>

      <Button
        borderBottomLeftRadius={50}
        borderBottomRightRadius={50}
        bgColor="#084E4E"
        _text={{ fontFamily: Poppins_700Bold }}
        onPress={handleSubmit(onLogin)}
        _pressed={{
          backgroundColor: 'cyan.900',
        }}>
        {loadingVerification(isLoading, 'Login')}
      </Button>
    </MotiView>
  );
}
