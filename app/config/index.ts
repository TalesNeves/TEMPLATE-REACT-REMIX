import getEnv from "@/utils/getEnv";

export const API_URL = getEnv()["REACT_APP_API_URL"] as string;
