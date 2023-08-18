import { HomeCard } from '@components/HomeCard';
import { MainBackground } from '@components/MainBackground';
import { AntDesign } from '@expo/vector-icons';
import { useLoadCameraPermissions } from '@hooks/useLoadCameraPermissions';
import { Href } from 'expo-router';
import { HStack, View } from 'native-base';
import React from 'react';
import { SettingsIconButton } from 'src/components/SettingsIconButton';

const cards = [
  { title: 'Documents', href: '/home/documents' as Href<''>, icon: 'idcard' as const },
  { title: 'Cards', href: '/home/cards' as Href<''>, icon: 'creditcard' as const },
];

export default function Home() {
  useLoadCameraPermissions();

  return (
    <View flex={1} bgColor="#1C1C1C">
      <MainBackground link="https://i.etsystatic.com/39519528/r/il/c3a97f/4486845485/il_570xN.4486845485_f2zb.jpg" />
      <HStack mx="12" mt="12" justifyContent="space-between" flexWrap="wrap">
        {cards.map((card) => (
          <HomeCard key={card.title} title={card.title} href={card.href}>
            <AntDesign name={card.icon} size={64} color="black" />
          </HomeCard>
        ))}
      </HStack>
      <SettingsIconButton />
    </View>
  );
}
