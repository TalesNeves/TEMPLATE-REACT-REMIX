export type AuthUser = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  bio: string;
  role: 'ADMIN' | 'USER';
};


export type UserResponse = {
  Status: number;
  Message: string;
  token: string;
  user: AuthUser;
};
