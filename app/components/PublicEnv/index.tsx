import { environment, type getPublicKeys } from "@/environment.server";
import { isBrowser } from "@/utils/isBrowser";

type Props = ReturnType<typeof getPublicKeys>["publicKeys"];

declare global {
  interface Window {
    ENV: Props;
  }
}
export function PublicEnv(props: Props) {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `window.ENV = ${JSON.stringify(props)}`,
      }}
    />
  );
}
export function getPublicEnv<T extends keyof Props>(key: T): Props[T] {
  if (isBrowser() && !window.ENV) {
    throw new Error(
      `Missing the <PublicEnv /> component at the root of your app.`
    );
  }
  return !isBrowser() ? environment()[key] : window.ENV[key];
}
