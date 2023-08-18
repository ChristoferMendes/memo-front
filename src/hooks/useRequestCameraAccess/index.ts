import { useCameraPermissions } from '@store/useCameraPermissions';
import { Camera } from 'expo-camera';

export function useRequestCameraAccess() {
  const { denyPermission, grantPermission } = useCameraPermissions();

  async function requestCameraAccess() {
    const { status, canAskAgain } = await Camera.requestCameraPermissionsAsync();

    if (!canAskAgain || status === 'denied') {
      return denyPermission();
    }

    grantPermission();
  }

  return {
    requestCameraAccess,
  };
}
