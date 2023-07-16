import { Link } from 'expo-router';
import { Box, Text, VStack } from 'native-base';
import { Poppins_600SemiBold } from 'src/constants/Fonts';

export function HomeCard({
  title,
  children,
  href,
}: {
  title: string;
  children?: React.ReactNode;
  href: string;
}) {
  return (
    <Link href={href}>
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
    </Link>
  );
}
