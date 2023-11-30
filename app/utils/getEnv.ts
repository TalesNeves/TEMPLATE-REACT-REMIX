import { isBrowser } from "./isBrowser";

export default function getEnv() {
  return isBrowser() ? window.ENV : process.env;
}
