import { create } from 'zustand';

interface TokenStore {
  token: string | null | undefined;
  setToken: (token: string) => void;
}

export const useToken = create<TokenStore>((set) => ({
  token: null,
  setToken: (token) => set({ token }),
}));
