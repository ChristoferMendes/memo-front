import {
  Box,
  Button,
  Divider,
  Icon,
  IconButton,
  Image,
  Text,
  VStack,
  View,
} from "native-base";
import Form from "native-base-formify";
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "../../constants/Fonts";
import { useForm } from "react-hook-form";
import { LoginDivider } from "../../components/LoginDivider";
import { User, UserSchema } from "./schema";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const labelTextProps = {
  _text: { fontFamily: Poppins_500Medium, color: "white" },
};

export default function Login() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<User>({
    resolver: zodResolver(UserSchema),
  });
  const [isPasswordOn, setIsPasswordOn] = useState(true);

  const onLogin = (data: User) => {
    console.warn(data);
  };

  return (
    <View flex={1} bgColor={"#1C1C1C"}>
      <Image
        bgColor={"red.600"}
        w={"full"}
        h={"43%"}
        borderBottomLeftRadius={60}
        borderBottomRightRadius={60}
        source={{
          uri: "https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1480268116/content-items/001/786/053/chapter_4_mp_web-original.jpg?1480268116",
        }}
        alt="Ukiyo-e"
      />
      <VStack mx="8" mt="5">
        <Form control={control} errors={errors}>
          <Form.Input
            name="email"
            label="Email"
            borderRadius={0}
            borderBottomRightRadius={50}
            borderWidth={"0"}
            backgroundColor={"white"}
            _labelProps={labelTextProps}
            fontFamily={Montserrat_500Medium}
          />
          <Form.Input
            name="password"
            label="Password"
            type={isPasswordOn ? "password" : "text"}
            bgColor={"white"}
            borderWidth={"0"}
            _labelProps={{ ...labelTextProps, mt: "5" }}
            borderRadius={"none"}
            fontFamily={Montserrat_500Medium}
            rightElement={
              <Icon
                onPress={() => setIsPasswordOn((prev) => !prev)}
                as={
                  <MaterialCommunityIcons
                    name={isPasswordOn ? "eye-minus" : "eye-check"}
                  />
                }
                mr="3"
                size={"7"}
              />
            }
          />
        </Form>
        <Button
          borderBottomLeftRadius={50}
          borderBottomRightRadius={50}
          bgColor={"#084E4E"}
          _text={{ fontFamily: Poppins_700Bold }}
          onPress={handleSubmit(onLogin)}
        >
          Login
        </Button>
        <VStack alignItems={"center"}>
          <LoginDivider />
          <Text
            color={"white"}
            fontSize={"lg"}
            fontFamily={Poppins_600SemiBold}
          >
            OR
          </Text>
          <LoginDivider />
        </VStack>
        <Button
          bg="#084E4E"
          borderRadius={"lg"}
          _text={{ fontFamily: Poppins_700Bold }}
        >
          Register
        </Button>
      </VStack>
    </View>
  );
}
