import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MotiView } from 'moti';
import { Button, Icon } from 'native-base';
import Form from 'native-base-formify';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Montserrat_500Medium, Poppins_500Medium, Poppins_700Bold } from '../../constants/Fonts';

const labelTextProps = {
  _text: { fontFamily: Poppins_500Medium, color: 'white' },
};

export function RegisterForm() {
  const {
    control,
    formState: { errors },
  } = useForm();
  const [isPasswordOn, setIsPasswordOn] = useState(true);

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
        // onPress={handleSubmit(onLogin)}
      >
        Register
      </Button>
    </MotiView>
  );
}
