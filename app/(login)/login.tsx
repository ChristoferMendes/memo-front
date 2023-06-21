import { Button, Image, ScrollView, Text, VStack, View } from "native-base";
import { Poppins_600SemiBold, Poppins_700Bold } from "../../constants/Fonts";
import { LoginDivider } from "../../components/LoginDivider";
import { User } from "./schema";
import { useLoginMutation } from "../../hooks/useLoginMutation";
import { LoginForm } from "../../components/LoginForm";
import { useRouter } from "expo-router";
import { useState } from "react";
import { RegisterForm } from "../../components/RegisterForm";
import { AnimatePresence } from "moti";
import { URI } from "@env";

export default function Login() {
  const [login] = useLoginMutation();
  const router = useRouter();
  const [isRegister, setIsRegister] = useState(false);

  const onLogin = (data: User) => {
    login(data.email, data.password);
    // router.push("/home");
  };

  const toggleRegister = () => {
    setIsRegister(!isRegister);
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
      <ScrollView>
        <VStack mx="8" mt="5">
          <AnimatePresence>
            {isRegister ? <RegisterForm /> : <LoginForm onLogin={onLogin} />}
          </AnimatePresence>
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
            onPress={toggleRegister}
            mb="5"
          >
            {isRegister ? "Login" : "Register"}
          </Button>
        </VStack>
      </ScrollView>
    </View>
  );
}
