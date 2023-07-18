import { Box } from 'native-base';

export function BoxForBottomIcon({ children }: { children: JSX.Element[] | JSX.Element }) {
  return (
    <Box display="flex" alignItems="center" position="absolute" bottom="6" width="full">
      {children}
    </Box>
  );
}
