import { AntDesign } from '@expo/vector-icons';
import { HStack, IconButton } from 'native-base';

export function Main({ children }: { children: React.ReactNode }) {
  return children;
}

function Container({ children }: { children: React.ReactNode }) {
  return (
    <HStack position="absolute" bottom="16" w="full" justifyContent="flex-end" pr="12">
      {children}
    </HStack>
  );
}

function Button() {
  return (
    <IconButton
      bgColor="green.800"
      rounded="full"
      opacity={0.5}
      alignSelf="center"
      _pressed={{
        bg: 'primary-green',
      }}
      icon={<AntDesign name="plus" color="white" size={24} />}
    />
  );
}

export const AddButton = Object.assign(Main, { Container, Button });
