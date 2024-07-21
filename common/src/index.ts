import { z } from "zod";

export const createBloginputs = z.object({
  title: z.string(),
  content: z.string(),
});

export const updateBloginputs = z.object({
  title: z.string(),
  content: z.string(),
  id: z.string(),
});
export const signupInputs = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
});

export const signinInputs = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type SignupInput = z.infer<typeof signupInputs>;
export type SigninInput = z.infer<typeof signinInputs>;
export type CreateBloginputs = z.infer<typeof createBloginputs>;
export type UpdateBloginputs = z.infer<typeof updateBloginputs>;
