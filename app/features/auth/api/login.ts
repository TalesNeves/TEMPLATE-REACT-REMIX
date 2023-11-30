import { axios } from "@/lib/axios";

export type LoginCredentials = {
  username: string;
  password: string;
};

export const loginWithEmailandPassword = (
  data: LoginCredentials
): Promise<any> => {
  return axios.post("", data);
};
