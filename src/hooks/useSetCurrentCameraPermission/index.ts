import { useCameraPermissions } from '@store/useCameraPermissions';
import { Camera } from 'expo-camera';
import { PermissionStatus } from 'expo-modules-core';

export function useSetCurrentCameraPermission() {
  const { denyPermission, grantPermission } = useCameraPermissions();

  async function revalidateCurrentStatus() {
    const { status } = await Camera.getCameraPermissionsAsync();

    if (status === PermissionStatus.DENIED) return denyPermission();

    grantPermission();
  }

  return {
    revalidateCurrentStatus,
  };
}
