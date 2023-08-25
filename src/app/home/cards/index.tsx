import { BackButton } from '@components/BackButton';
import { BoxForBottomIcon } from '@components/BoxForBottomIcon';
import { MainBackground } from '@components/MainBackground';
import { Card } from '@ui-kit/Card';
import { View } from 'native-base';

export default function Cards() {
  return (
    <View flex={1} bg="primary-background">
      <MainBackground link="https://www.japanhousela.com/sites/japanhouse.com.losangeles/files/2023-02/Nikko-Hannya-and-Hoto-Waterfalls-by-Yoshu-Chikanobu.jpg" />
      <Card image={{ alt: '', uri: '' }} />
      <BoxForBottomIcon>
        <BackButton />
      </BoxForBottomIcon>
    </View>
  );
}
