import { Link } from "@remix-run/react";
import { Form } from "@/components/Form";
import { InputField } from "@/components/Form/Input";
import { z } from "zod";
import { useLogin } from "@/lib/auth";

const schema = z.object({
  email: z.string(),
  password: z.string(),
});

type LoginValues = {
  email: string;
  password: string;
};

type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  //   const { login } = useAuth();
  const login = useLogin();
  return (
    <div>
      <Form<LoginValues, typeof schema>
        onSubmit={async (values) => {
          await login.mutate(values);
          onSuccess();
        }}
        schema={schema}
      >
        {({ register, formState }) => (
          <>
            <InputField
              type="email"
              label="Email Address"
              error={formState.errors["email"]}
              registration={register("email")}
            />
            <InputField
              type="password"
              label="Password"
              error={formState.errors["password"]}
              registration={register("password")}
            />
            <div>
              <button type="submit">Log in</button>
            </div>
          </>
        )}
      </Form>
      <div className="mt-2 flex items-center justify-end">
        <div className="text-sm">
          <Link
            to="../register"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};
