import { InputField, Form } from "@/components/Form";
import { z } from "zod";
import { useRegister } from "@/lib/auth";

const schema = z.object({
  email: z.string().max(2),
  username: z.string(),
  password: z.string(),
});

type RegisterFormValues = {
  email: string;
  username: string;
  password: string;
};

type RegisterFormProps = {
  onSuccess: () => void;
};

export const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  const register = useRegister();
  return (
    <div>
      <Form<RegisterFormValues, typeof schema>
        onSubmit={async (values, event) => {
          await register.mutate(values);
          event?.preventDefault();
        }}
      >
        {({ register, formState }) => (
          <>
            <InputField
              type="text"
              label="Email"
              error={formState.errors["email"]}
              registration={register("email")}
            />
            <InputField
              type="text"
              label="Username"
              error={formState.errors["username"]}
              registration={register("username")}
            />
            <InputField
              type="text"
              label="Password"
              error={formState.errors["password"]}
              registration={register("password")}
            />
            <button type="submit">Register</button>
          </>
        )}
      </Form>
    </div>
  );
};
