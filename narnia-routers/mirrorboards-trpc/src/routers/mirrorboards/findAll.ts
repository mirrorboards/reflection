import t from "../../trpc";
import { z } from 'zod';
import { Mirrorboards } from 'mirrorboards-sdk'

const input = z.void();

const output = z.object({
  mirrorboards: z.array(z.any()),
  user: z.any(),
});

export const findAll = t.router({
  findAll: t.procedure.input(input).output(output)
    .meta({
      openapi: {
        method: 'GET',
        path: '/mirrorboards/mirrorboards/findAll',
        protect: true,
        description: 'Find all mirrorboards',
        tags: ['mirrorboards']
      }
    })
    .query(async ({ ctx }) => {
      const user = await ctx.fetchCurrentUser();

      return {
        mirrorboards: [],
        user,
      }
    })
});