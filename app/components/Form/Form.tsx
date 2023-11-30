import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import {
  useForm,
  type FieldValues,
  type UseFormReturn,
  type SubmitHandler,
  type UseFormProps,
} from "react-hook-form";
import { type ZodType, type ZodTypeDef } from "zod";

type FormProps<TFormValues extends FieldValues, Schema> = {
  className?: string;
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options?: UseFormProps<TFormValues>;
  id?: string;
  schema?: Schema;
};

export const Form = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>,
  Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<
    unknown,
    ZodTypeDef,
    unknown
  >
>({
  onSubmit,
  children,
  className="",
  options,
  id,
  schema,
}: FormProps<TFormValues, Schema>) => {
  const methods = useForm<TFormValues>({
    ...options,
    resolver: schema && zodResolver(schema),
  });
  return (
    <form
     className={className}
     onSubmit={methods.handleSubmit(onSubmit)}
     id={id}>
      {children(methods)}
    </form>
  );
};
