import { Button, Text, View } from 'native-base';

import { useAuth } from '../../context/auth';

export default function Settings() {
  const { signOut } = useAuth();

  return (
    <View>
      <Text>Settings</Text>
      <Button onPress={signOut}>Sign Out</Button>
    </View>
  );
}
