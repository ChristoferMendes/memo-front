import { useSetCurrentCameraPermission } from '@hooks/useSetCurrentCameraPermission';
import { useEffect } from 'react';

export const useLoadCameraPermissions = () => {
  const { revalidateCurrentStatus } = useSetCurrentCameraPermission();

  useEffect(() => {
    revalidateCurrentStatus();
  }, []);
};
