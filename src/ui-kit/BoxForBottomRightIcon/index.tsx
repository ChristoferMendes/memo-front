import { Box } from 'native-base';

export function BoxForBottomRightIcon({ children }: { children: JSX.Element[] | JSX.Element }) {
  return (
    <Box display="flex" alignItems="center" position="absolute" left="40" bottom="6" width="full">
      {children}
    </Box>
  );
}
