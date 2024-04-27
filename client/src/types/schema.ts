import { z } from "zod";
export const DevSchema = z
  .object({
    username: z.string().min(1),
    firstname: z.string().min(1),
    lastname: z.string().optional(),
    password: z.string().min(8),
    confirmPassword: z.string().min(1),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });

export const LoginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(8),
});

export const updateDevSchema = z.object({
  username: z.string().min(1),
  firstname: z.string().min(1),
  middlename: z.string().optional(),
  lastname: z.string().optional(),
  bio: z.string().optional().nullable(),
  stacks: z.string().optional().nullable(),
  links: z
    .object({
      title: z.string(),
      link: z.string(),
    })
    .array()
    .optional(),
});

export type TDevSchema = z.infer<typeof DevSchema>;
export type TLoginSchema = z.infer<typeof LoginSchema>;
export type TupdateDevSchema = z.infer<typeof updateDevSchema>;
