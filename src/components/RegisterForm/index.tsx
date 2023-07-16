import { MaterialCommunityIcons } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFocusEffect } from 'expo-router';
import { MotiView } from 'moti';
import { Button, Icon } from 'native-base';
import Form from 'native-base-formify';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { UserRegister, UserRegisterSchema } from './schema';
import { DEFAULT_ERROR_MESSAGE } from '../../constants/DefaultErrorMessage';
import { Montserrat_500Medium, Poppins_500Medium, Poppins_700Bold } from '../../constants/Fonts';
import { useLoginMutation } from '../../hooks/auth/useLoginMutation';
import { useSignIn } from '../../hooks/auth/useSignIn';
import { useBooleanState } from '../../hooks/useBooleanState';
import { useCreateUserMutation } from '../../hooks/useCreateUserMutation';
import { loadingVerification } from '../../utils/loadingVerification';
import { tryCatch } from '../../utils/tryCatch';

const labelTextProps = {
  _text: { fontFamily: Poppins_500Medium, color: 'white' },
};

export function RegisterForm() {
  const {
    control,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<UserRegister>({
    resolver: zodResolver(UserRegisterSchema),
  });
  const [isPasswordOn, setIsPasswordOn] = useState(true);
  const [createUser] = useCreateUserMutation(setError);
  const [login] = useLoginMutation(setError);
  const { handleRedirect } = useSignIn();
  const [isLoading, onOpenLoading, onCloseLoading] = useBooleanState();

  const onRegister = async (formData: UserRegister) => {
    onOpenLoading();
    const [result, error] = await tryCatch(
      createUser(formData.email, formData.password, formData.name)
    );

    if (!result || error) return setError('email', { message: DEFAULT_ERROR_MESSAGE });

    const [loginResult, loginError] = await tryCatch(login(formData.email, formData.password));

    if (loginError || !loginResult?.data) {
      onCloseLoading();
      return setError('email', { message: DEFAULT_ERROR_MESSAGE });
    }

    handleRedirect(loginResult.data.login);
  };

  const memoizedFuntion = useCallback(onCloseLoading, []);

  useFocusEffect(memoizedFuntion);

  return (
    <MotiView
      from={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ type: 'timing', duration: 600 }}>
      <Form control={control} errors={errors}>
        <Form.Input
          name="name"
          label="Name"
          borderRadius={0}
          bgColor="white"
          borderBottomRightRadius={50}
          _labelProps={labelTextProps}
          placeholder="John"
          mb="5"
        />
        <Form.Input
          name="email"
          label="Email"
          borderRadius={0}
          borderBottomRightRadius={50}
          borderWidth="0"
          placeholder="your_name@gmail.com"
          backgroundColor="white"
          _labelProps={labelTextProps}
          mb="5"
          fontFamily={Montserrat_500Medium}
        />
        <Form.Input
          name="password"
          label="Password"
          type={isPasswordOn ? 'password' : 'text'}
          bgColor="white"
          borderWidth="0"
          _labelProps={{ ...labelTextProps }}
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
        onPress={handleSubmit(onRegister)}
        _pressed={{
          bgColor: 'cyan.800',
        }}>
        {loadingVerification(isLoading, 'Register')}
      </Button>
    </MotiView>
  );
}
