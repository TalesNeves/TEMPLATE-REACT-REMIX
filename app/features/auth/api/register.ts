import { axios } from "@/lib/axios";

export type RegisterCredentials = {
  email: string;
  username: string;
  password: string;
};

export const register = (data: RegisterCredentials): Promise<any> => {
  return axios.post("/authentication-service/registerUser", data);
};
