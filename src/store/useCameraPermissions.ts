import { PermissionStatus } from 'expo-camera';
import { create } from 'zustand';

interface Store {
  status: PermissionStatus;
  grantPermission: () => void;
  denyPermission: () => void;
}

export const useCameraPermissions = create<Store>((set) => ({
  status: PermissionStatus.UNDETERMINED,
  grantPermission: () => set({ status: PermissionStatus.GRANTED }),
  denyPermission: () => set({ status: PermissionStatus.DENIED }),
}));
