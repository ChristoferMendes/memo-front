interface User {
  id: string;
  email: string;
  name: string;
}

export interface UserLoginResponse {
  login: {
    user: User;
    token: string;
  };
}
