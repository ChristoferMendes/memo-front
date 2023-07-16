import { BoxForBottomIcon } from '@components/BoxForBottomIcon';
import { Poppins_600SemiBold } from '@constants/Fonts';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { IconButton, Text } from 'native-base';

export const SettingsIconButton = () => {
  const router = useRouter();

  return (
    <BoxForBottomIcon>
      <IconButton
        icon={<AntDesign name="setting" color="white" size={48} />}
        onPress={() => {
          router.push('/home/settings');
        }}
      />
      <Text color="white" fontSize="md" fontFamily={Poppins_600SemiBold}>
        SETTINGS
      </Text>
    </BoxForBottomIcon>
  );
};
