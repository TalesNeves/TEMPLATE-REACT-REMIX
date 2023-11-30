import { z } from "zod";
import { pick } from "moderndash";

const environmentSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  REACT_APP_API_URL: z.string().min(1),
  APP_TITLE: z.string(),
  PROJECT_NAME: z.string(),
});

const environment = () => {
  return environmentSchema.parse(process.env);
};

function getPublicKeys() {
  return {
    publicKeys: pick(environment(), [
      "REACT_APP_API_URL",
      "NODE_ENV",
      "APP_TITLE",
      "PROJECT_NAME",
    ]),
  };
}

export { environment, getPublicKeys };
