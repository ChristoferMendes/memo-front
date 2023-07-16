import { User } from '../user.base.types';

interface LoginResponse {
  login: {
    user: User;
    token: string;
  };
}

interface RegisterResponse {
  createUser: User;
}

interface MeResponse {
  me: User;
}

export type { LoginResponse, RegisterResponse, MeResponse };
