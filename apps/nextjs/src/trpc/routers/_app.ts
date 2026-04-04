import { z } from "zod";

import { baseProcedure, createTRPCRouter, protectedProcedure } from "../init";

export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input.text}`,
      };
    }),
  auth: createTRPCRouter({
    check: protectedProcedure.query(({ ctx }) => {
      return {
        authenticated: true,
        user: {
          id: ctx.session.user.id,
          email: ctx.session.user.email,
          name: ctx.session.user.name,
        },
      };
    }),
  }),
});

export type AppRouter = typeof appRouter;
