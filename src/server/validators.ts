/**
 * This file contains the schemas for the form and question objects.
 *
 * Initially I created simple type definitions for each object, but since
 * we are dealing with JSON which is inherently unsafe, I decided to use
 * Zod to validate the data and just infer the types from the schemas.
 */

import { z } from "zod";

export const questionSchema = z
  .object({
    id: z.string(),
    title: z.string(),
  })
  .and(
    z.discriminatedUnion("type", [
      z.object({
        type: z.literal("one-choice"),
        options: z.array(z.string()),
      }),
      z.object({
        type: z.literal("multiple-choice"),
        options: z.array(z.string()),
      }),
      z.object({
        type: z.literal("input"),
        placeholder: z.string(),
      }),
    ]),
  );

export const quizSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  questions: z.array(questionSchema),
});

export type Question = z.infer<typeof questionSchema>;
export type Quiz = z.infer<typeof quizSchema>;
