import { Poppins_600SemiBold } from '@constants/Fonts';
import { Box, Text, VStack } from 'native-base';

export function HomeCard({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <VStack>
      <Text color="white" fontFamily={Poppins_600SemiBold}>
        {title}
      </Text>
      <Box
        w="32"
        display="flex"
        bgColor="white"
        alignItems="center"
        justifyContent="center"
        h="32"
        rounded="xl"
        shadow="5"
        style={{ shadowColor: 'white' }}>
        {children}
      </Box>
    </VStack>
  );
}
