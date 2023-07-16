import { AntDesign } from '@expo/vector-icons';
import { Box, Button, HStack, Image, Text, Tooltip, VStack, View } from 'native-base';
import { BackButton } from 'src/components/BackButton';
import { BoxForBottomIcon } from 'src/components/BoxForBottomIcon';
import { MainBackground } from 'src/components/MainBackground';
import { Poppins_700Bold } from 'src/constants/Fonts';
import { useBooleanState } from 'src/hooks/useBooleanState';

import { useAuth } from '../../../context/auth';

export default function Settings() {
  const { user, signOut } = useAuth();
  const [isQuestion, onOpenIsQuestion] = useBooleanState();
  const [isCurrentThemeOpen, onOpenCurrentTheme, onCloseCurrentTheme] = useBooleanState();

  const onLogoutPress = () => {
    if (!isQuestion) return onOpenIsQuestion();

    signOut();
  };

  const onCurrentThemePress = () => {
    onOpenCurrentTheme();

    setTimeout(() => {
      onCloseCurrentTheme();
    }, 2000);
  };

  return (
    <View flex={1} background="primary-background">
      <MainBackground link="https://mkpcdn.com/1000x/60518c1cd86b1755a512568b75baba69_125206.jpg" />
      <HStack space="2" bg="primary-green" mx="6" rounded="2xl" h="24" alignItems="center" mt="20">
        <Image
          source={{ uri: 'https://img.freepik.com/free-icon/user_318-159711.jpg' }}
          size="16"
          ml="6"
          alt="User image"
        />
        <VStack justifyContent="center">
          <Text color="white" fontSize="md" fontFamily={Poppins_700Bold}>
            {user?.name}
          </Text>
          <Text color="gray.400" fontSize="md" fontFamily={Poppins_700Bold}>
            Full stack developer
          </Text>
        </VStack>
        <HStack flex={1} justifyContent="flex-end" mr="6" mt="1.5">
          <AntDesign
            name={isQuestion ? 'question' : 'logout'}
            size={24}
            color="white"
            onPress={onLogoutPress}
          />
        </HStack>
      </HStack>
      <BoxForBottomIcon>
        <VStack>
          <Tooltip
            label="Themes are currently in development"
            placement="top"
            isOpen={isCurrentThemeOpen}>
            <Button variant="ghost" onPress={onCurrentThemePress} _pressed={{ bg: 'transparent' }}>
              <Text fontFamily={Poppins_700Bold} color="white" fontSize="xl">
                CURRENT THEME
              </Text>
              <HStack
                bg="#333333"
                borderBottomLeftRadius={35}
                h="10"
                borderBottomRightRadius={35}
                justifyContent="center"
                alignItems="center">
                <Text fontFamily={Poppins_700Bold} color="#6B6B6B" fontSize="md">
                  UKIYO-E
                </Text>
              </HStack>
            </Button>
          </Tooltip>
        </VStack>
        <HStack mt="5">
          <BackButton />
        </HStack>
      </BoxForBottomIcon>
    </View>
  );
}
