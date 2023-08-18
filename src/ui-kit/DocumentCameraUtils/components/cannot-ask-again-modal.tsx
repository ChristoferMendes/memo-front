import { Poppins_400Regular, Poppins_600SemiBold } from '@constants/Fonts';
import { Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useGrantPermissionOnMobileSettings } from '@hooks/useGrantPermissionOnMobileSettings';
import { Logo } from '@ui-kit/Logo';
import { useNavigation } from 'expo-router';
import { Button, Divider, HStack, Modal, Text, VStack } from 'native-base';

export function CannotAskAgainModal() {
  const navigation = useNavigation();
  const { requestAccess } = useGrantPermissionOnMobileSettings();

  const onClose = () => {
    navigation.goBack();
  };

  return (
    <Modal isOpen w="96">
      <Modal.Content>
        <Modal.CloseButton />
        <Logo />
        <HStack ml="2" p="2" alignItems="center" space="2">
          <Text fontFamily={Poppins_600SemiBold} fontSize="lg" mt="0.5">
            We could not ask again for camera access
          </Text>
        </HStack>
        <Divider />

        <VStack alignItems="center" p="4" space={2}>
          <FontAwesome5 name="sad-cry" size={75} />
          <Text fontFamily={Poppins_400Regular} textAlign="center" fontSize="md">
            As your probably revoked the camera access, we cannot ask again for it. Please go to
            settings and grant access to the camera
          </Text>
          <Button.Group mt="5" ml="auto">
            <Button
              leftIcon={<MaterialIcons name="cancel" color="white" size={26} />}
              backgroundColor="red.600"
              onPress={onClose}>
              Cancel
            </Button>
            <Button
              leftIcon={<Feather name="settings" size={26} color="white" />}
              bgColor="green.600"
              onPress={requestAccess}>
              Go to Settings
            </Button>
          </Button.Group>
        </VStack>
      </Modal.Content>
    </Modal>
  );
}
