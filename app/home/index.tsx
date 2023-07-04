import { Text, View } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { DocumentsCard } from '../../components/DocumentsCard';
import { MainBackground } from '../../components/MainBackground';

export default function Home() {
  return (
    <View flex={1}>
      <MainBackground link="https://i.etsystatic.com/39519528/r/il/c3a97f/4486845485/il_570xN.4486845485_f2zb.jpg" />
      <View>
        <DocumentsCard />
      </View>
    </View>
  );
}
