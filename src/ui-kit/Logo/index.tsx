import { IImageProps, Image } from 'native-base';

const logo = require('@assets/memo/logo-colors.png');

export function Logo(props: IImageProps) {
  const height = props.h ?? props.height ?? '48';
  const resizeMode = props.resizeMode ?? 'cover';

  return <Image source={logo} alt="Memo logo" resizeMode={resizeMode} height={height} {...props} />;
}
