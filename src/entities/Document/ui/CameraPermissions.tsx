import { useCameraPermissions } from '@store/useCameraPermissions';
import { DocumentCameraUtils } from '@ui-kit/DocumentCameraUtils';
import { PermissionStatus } from 'expo-modules-core';

export function CameraPermissions() {
  const { status, grantPermission } = useCameraPermissions();

  function cameraPermissionStateMachine() {
    if (status === PermissionStatus.UNDETERMINED) {
      return <DocumentCameraUtils.GrantAccessModal onConfirm={grantPermission} />;
    }

    return status === PermissionStatus.DENIED ? <DocumentCameraUtils.CannotAskAgainModal /> : null;
  }

  return cameraPermissionStateMachine();
}
