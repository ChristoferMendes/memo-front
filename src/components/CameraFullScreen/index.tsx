import { ImageBase64 } from '@components/ImageBase64';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { DocumentTypeEnum } from '@generated/graphql';
import { useFullScreenCameraStyle } from '@hooks/useFullScreenCameraStyle';
import { usePreviewSelectedDocumentType } from '@store/usePreviewSelectedDocumentType';
import { Camera, CameraProps } from 'expo-camera';
import { Button, HStack, IconButton, Select, VStack } from 'native-base';
import React, { Children } from 'react';
import { View, StyleSheet } from 'react-native';

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
function HeaderActionButtonsContainer({ children }: { children: React.ReactNode }) {
  const childrenArray = Children.toArray(children);

  const verifyJustifyContent = childrenArray.length > 1 ? 'space-between' : 'flex-end';

  return (
    <HStack zIndex={10} safeArea justifyContent={verifyJustifyContent} px="6" mt="2">
      {children}
    </HStack>
  );
}

function EditButton({ onPress }: { onPress: () => void }) {
  return (
    <HStack>
      <IconButton
        onPress={onPress}
        rounded="full"
        bg="white"
        icon={<AntDesign name="edit" size={24} color="black" />}
      />
    </HStack>
  );
}

function CloseButton({ onPress }: { onPress: () => void }) {
  return (
    <HStack>
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

function Preview({ base64, children }: { base64: string; children: React.ReactNode }) {
  return (
    <VStack position="absolute" w="full" h="full">
      <ImageBase64 base64={base64} alt="Image preview" w="full" h="full" />
      <VStack
        position="absolute"
        bottom={12}
        space="5"
        alignItems="flex-end"
        w="full"
        justifyContent="center">
        {children}
      </VStack>
    </VStack>
  );
}

function PreviewSelect() {
  const documentTypes = Object.values(DocumentTypeEnum);
  const { setSelectedDocumentType } = usePreviewSelectedDocumentType();

  return (
    <Select
      defaultValue={DocumentTypeEnum.Id}
      onValueChange={(value) => setSelectedDocumentType(value as DocumentTypeEnum)}
      minWidth="full"
      accessibilityLabel="Choose document type"
      bg="white"
      placeholder="Choose document type">
      {documentTypes.map((documentType) => (
        <Select.Item key={documentType} value={documentType} label={documentType} />
      ))}
    </Select>
  );
}

function SubmitButton({ onPress }: { onPress: () => void }) {
  return (
    <IconButton
      mr="6"
      rounded="full"
      onPress={onPress}
      bg="white"
      icon={<FontAwesome name="send-o" size={32} />}
    />
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

export const CameraFullScreen = Object.assign(Main, {
  HeaderActionButtonsContainer,
  CloseButton,
  TakePictureButton,
  Preview,
  PreviewSelect,
  SubmitButton,
  EditButton,
});
