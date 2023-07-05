import { AntDesign } from '@expo/vector-icons';
import { Text, View } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HomeCard } from '../../components/HomeCard';
import { MainBackground } from '../../components/MainBackground';

export default function Home() {
  return (
    <View flex={1} bgColor="#1C1C1C">
      <MainBackground link="https://i.etsystatic.com/39519528/r/il/c3a97f/4486845485/il_570xN.4486845485_f2zb.jpg" />
      <View>
        <HomeCard title="Documents">
          <AntDesign name="idcard" size={64} color="black" />
        </HomeCard>
      </View>
    </View>
  );
}
