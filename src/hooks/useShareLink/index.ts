import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { useToast } from 'native-base';

export function useShareLink() {
  const toast = useToast();

  const onShare = async (base64: string) => {
    const uri = await getUriToBeShared(base64);

    const canBeUsed = await Sharing.isAvailableAsync();

    if (!canBeUsed) return toast.show({ title: 'Cannot share this file' });

    await Sharing.shareAsync(uri);
  };

  async function getUriToBeShared(base64: string) {
    const fileUri = FileSystem.documentDirectory + 'sharing.png';

    await FileSystem.writeAsStringAsync(fileUri, base64, {
      encoding: FileSystem.EncodingType.Base64,
    });

    return fileUri;
  }

  return { onShare };
}
