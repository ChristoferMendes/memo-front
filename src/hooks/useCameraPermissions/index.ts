import { Camera, PermissionStatus } from 'expo-camera';
import { useEffect, useState } from 'react';

export const useCameraPermissions = () => {
  const [cameraPermission, setCameraPermission] = useState(false);
  const [canAskAgain, setCanAskAgain] = useState(true);

  function addPermission(status: PermissionStatus) {
    setCameraPermission(status === 'granted');
  }

  async function grantCameraAccess() {
    const { status, canAskAgain } = await Camera.requestCameraPermissionsAsync();

    if (!canAskAgain) return setCanAskAgain(false);

    addPermission(status);
  }

  async function handlePermission() {
    const { status } = await Camera.getCameraPermissionsAsync();

    addPermission(status);
  }

  useEffect(() => {
    handlePermission();
  }, []);

  return {
    cameraPermission,
    canAskAgain,
    grantCameraAccess,
  };
};
