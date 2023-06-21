import { User } from "./schema";

export interface UserLoginResponse {
  user: {
    id: string;
    email: string;
    name: string;
  };
  token: string;
}
