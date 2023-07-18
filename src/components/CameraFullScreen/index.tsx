import { AntDesign } from '@expo/vector-icons';
import { Camera, CameraProps } from 'expo-camera';
import { Button, HStack, IconButton } from 'native-base';
import React from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';

export interface CameraFullScreenProps extends CameraProps {
  setRef: (ref: Camera | null) => void;
}

function Main(props: CameraFullScreenProps) {
  const { cameraStyle, contentStyle } = useFullScreenCameraStyle();

  return (
    <Camera style={[styles.cover, cameraStyle]} {...props} ref={(ref) => props.setRef(ref)}>
      <View style={[styles.cover, contentStyle]}>{props.children}</View>
    </Camera>
  );
}

function CloseButton({ onPress }: { onPress: () => void }) {
  return (
    <HStack safeArea justifyContent="flex-end" mr="6" mt="5">
      <IconButton
        onPress={onPress}
        bg="white"
        rounded="full"
        icon={<AntDesign name="close" size={24} color="black" />}
      />
    </HStack>
  );
}

function TakePictureButton({ onPress }: { onPress: () => void }) {
  return (
    <HStack position="absolute" bottom={12} w="full" justifyContent="center">
      <Button
        size="16"
        bg="white"
        rounded="full"
        _pressed={{ bgColor: 'primary-green' }}
        onPress={onPress}
      />
    </HStack>
  );
}

const styles = StyleSheet.create({
  cover: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 10,
  },
});

function useFullScreenCameraStyle(ratio = 3 / 4) {
  const window = useWindowDimensions();
  const isPortrait = window.height >= window.width;
  let cameraStyle, contentStyle;

  if (isPortrait) {
    const widthByRatio = window.height * ratio;
    const widthOffsetByRatio = -((widthByRatio - window.width) / 2);

    cameraStyle = { left: widthOffsetByRatio, right: widthOffsetByRatio };
    contentStyle = { left: -widthOffsetByRatio, right: -widthOffsetByRatio };
  } else {
    const heightByRatio = window.width * ratio;
    const heightOffsetByRatio = -((heightByRatio - window.height) / 2);
    cameraStyle = { top: heightOffsetByRatio, bottom: heightOffsetByRatio };
    contentStyle = { top: -heightOffsetByRatio, bottom: -heightOffsetByRatio };
  }

  return { cameraStyle, contentStyle };
}

export const CameraFullScreen = Object.assign(Main, { CloseButton, TakePictureButton });
