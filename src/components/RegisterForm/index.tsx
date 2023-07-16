import { DEFAULT_ERROR_MESSAGE } from '@constants/DefaultErrorMessage';
import { Montserrat_500Medium, Poppins_500Medium, Poppins_700Bold } from '@constants/Fonts';
import { UserRegisterSchema, UserRegisterType } from '@entities/User/auth/register';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLoginMutation } from '@hooks/auth/useLoginMutation';
import { useBooleanState } from '@hooks/useBooleanState';
import { useCreateUserMutation } from '@hooks/useCreateUserMutation';
import { storeTokenOnAsyncStorage } from '@services/asyncStorage';
import { useFocusEffect } from 'expo-router';
import { MotiView } from 'moti';
import { Button, Icon } from 'native-base';
import Form from 'native-base-formify';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { tryCatchPromise } from 'safe-catch';
import { useAuth } from 'src/context/auth';
import { loadingVerification } from 'src/utils/loadingVerification';

const labelTextProps = {
  _text: { fontFamily: Poppins_500Medium, color: 'white' },
};

export function RegisterForm() {
  const {
    control,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<UserRegisterType>({
    resolver: zodResolver(UserRegisterSchema),
  });
  const [isPasswordOn, setIsPasswordOn] = useState(true);
  const [createUser] = useCreateUserMutation(setError);
  const [login] = useLoginMutation(setError);
  const [isLoading, onOpenLoading, onCloseLoading] = useBooleanState();
  const { signIn } = useAuth();

  const onRegister = async (formData: UserRegisterType) => {
    onOpenLoading();
    const [registerResult, error] = await tryCatchPromise(
      createUser(formData.email, formData.password, formData.name)
    );

    if (!registerResult || error) return setError('email', { message: DEFAULT_ERROR_MESSAGE });

    const [loginResult, loginError] = await tryCatchPromise(
      login(formData.email, formData.password)
    );

    if (loginError || !loginResult?.data) {
      onCloseLoading();
      return setError('email', { message: DEFAULT_ERROR_MESSAGE });
    }

    storeTokenOnAsyncStorage(loginResult.data?.login.token);
    signIn(loginResult.data.login.user);
  };

  const memoizedFunction = useCallback(onCloseLoading, []);

  useFocusEffect(memoizedFunction);

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
