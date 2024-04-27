import { z } from "zod";
export const DevSchema = z.object({
  username: z.string().min(1),
  firstname: z.string().min(1),
  lastname: z.string().optional(),
  password: z.string().min(8),
});

export const LoginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(8),
});

export const updateDevSchema = z.object({
  id: z.string(),
  username: z.string().min(1),
  firstname: z.string().min(1),
  middlename: z.string().optional(),
  lastname: z.string().optional(),
  bio: z.string().optional(),
  stacks: z.string().optional().nullable(),
  links: z.string().optional(),
});

export type TDevSchema = z.infer<typeof DevSchema>;
export type TLoginSchema = z.infer<typeof LoginSchema>;
export type TupdateDevSchema = z.infer<typeof updateDevSchema>;
