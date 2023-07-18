import { IImageProps, Image } from 'native-base';

type ImageBase64Props = IImageProps & {
  base64: string;
};

export function ImageBase64(props: ImageBase64Props) {
  return <Image source={{ uri: `data:image/png;base64,${props.base64}` }} {...props} />;
}
