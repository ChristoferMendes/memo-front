import { Poppins_600SemiBold } from '@constants/Fonts';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Box, IconButton, Text } from 'native-base';

export const SettingsIconButton = () => {
  const router = useRouter();

  return (
    <Box display="flex" alignItems="center" position="absolute" bottom="12" width="full">
      <IconButton
        icon={<AntDesign name="setting" color="white" size={48} />}
        onPress={() => {
          router.push('/settings');
        }}
      />
      <Text color="white" fontSize="md" fontFamily={Poppins_600SemiBold}>
        SETTINGS
      </Text>
    </Box>
  );
};
