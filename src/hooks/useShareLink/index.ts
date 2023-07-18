import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { useToast } from 'native-base';

export function useShareLink() {
  const toast = useToast();

  const onShare = async (link: string) => {
    const uri = await getUriToBeShared(link);

    const canBeUsed = await Sharing.isAvailableAsync();

    if (!canBeUsed) return toast.show({ title: 'Cannot share this file' });

    await Sharing.shareAsync(uri);
  };

  async function getUriToBeShared(link: string) {
    const fileUri = FileSystem.documentDirectory + 'sharing.png';

    const { uri } = await FileSystem.downloadAsync(link, fileUri);

    return uri;
  }

  return { onShare };
}
