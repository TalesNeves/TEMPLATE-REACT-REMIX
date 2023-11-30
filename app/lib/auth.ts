// @ts-ignore
import { configureAuth } from "react-query-auth";

import {
  type LoginCredentials,
  type RegisterCredentials,
  type UserResponse,
  register,
  loginWithEmailandPassword,
  //   LoginCredentialsDTO,
  //   RegisterCredentialsDTO,
  // AuthUser
  //   RegisterCredentials,
} from "@/features/auth";
import storage from "@/utils/storage";

async function handleUserResponse(data: UserResponse) {
  const { token, user } = data;
  storage.setToken(token);
  return user;
}

async function userFn() {
  if (storage.getToken()) {
    //  const data = await getUser();
    //  return data;
  }
  return null;
}

async function loginFn(data: LoginCredentials) {
  const response = await loginWithEmailandPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function registerFn(data: RegisterCredentials) {
  const response = await register(data);
  const user = await handleUserResponse(response);
  return user;
}

async function logoutFn() {
  storage.clearToken();
  window.location.assign(window.location.origin as unknown as string);
}

const authConfig = {
  userFn,
  loginFn,
  registerFn,
  logoutFn,
  LoaderComponent() {
    return null;
  },
};

export const { useUser, useLogin, useRegister, useLogout, AuthLoader } =
  configureAuth(authConfig);
