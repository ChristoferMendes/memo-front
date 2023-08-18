import { Poppins_500Medium, Poppins_600SemiBold } from '@constants/Fonts';
import { Feather } from '@expo/vector-icons';
import { Logo } from '@ui-kit/Logo';
import { useNavigation } from 'expo-router';
import { Button, Divider, HStack, Modal, Text, VStack } from 'native-base';

interface GrantAccessModalProps {
  onConfirm: () => void;
}

export function GrantAccessModal({ onConfirm }: GrantAccessModalProps) {
  const navigation = useNavigation();

  function onCancel() {
    navigation.goBack();
  }

  return (
    <Modal isOpen>
      <Modal.Content w="80">
        <Modal.CloseButton />

        <Logo />
        <HStack ml="2" p="2" alignItems="center" space="2">
          <Text fontFamily={Poppins_600SemiBold} fontSize="lg" mt="0.5">
            Grant Camera Access
          </Text>
        </HStack>
        <Divider />
        <VStack pb="6" space="6">
          <VStack alignItems="center" pt="2">
            <Text fontFamily={Poppins_500Medium} fontSize="md">
              In order for you to take pictures of your documents, we will need your permission to
              the camera
            </Text>
          </VStack>
          <HStack justifyContent="flex-end" space="3" mr="1">
            <Button
              leftIcon={<Feather name="camera-off" color="white" size={26} />}
              bgColor="red.600"
              _pressed={{
                bg: 'red.700',
              }}
              onPress={onCancel}>
              Not Now
            </Button>
            <Button
              leftIcon={<Feather name="camera" color="white" size={26} />}
              bgColor="primary.900"
              _pressed={{
                bg: 'primary.800',
              }}
              onPress={onConfirm}>
              Grant Access
            </Button>
          </HStack>
        </VStack>
      </Modal.Content>
    </Modal>
  );
}
