import { useSetCurrentCameraPermission } from '@hooks/useSetCurrentCameraPermission';
import { useCameraPermissions } from '@store/useCameraPermissions';
import { openSettings } from 'expo-linking';
import { PermissionStatus } from 'expo-modules-core';
import { useEffect } from 'react';
import { AppState } from 'react-native';

export function useGrantPermissionOnMobileSettings() {
  const { revalidateCurrentStatus } = useSetCurrentCameraPermission();
  const { status } = useCameraPermissions();

  async function requestAccess() {
    await openSettings();
  }

  function handleUpdatedPermission() {
    if (status !== PermissionStatus.DENIED) return;

    revalidateCurrentStatus();
  }

  useEffect(() => {
    const subscription = AppState.addEventListener('change', handleUpdatedPermission);

    return () => {
      subscription.remove();
    };
  }, []);

  return {
    requestAccess,
  };
}
