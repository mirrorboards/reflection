import { z } from 'zod';
import { Luna } from "luna-sdk";
import { t } from '../../../trpc';
import { withLuna } from '../../../luna/luna.withLuna.procedure';

const input = z.void();

const output = z.object({
  mirrorboards: z.array(Luna.Mirrorboard),
});

export const findAllPublic = t.router({
  findAllPublic: withLuna.input(input).output(output)
    .meta({
      openapi: {
        method: 'GET',
        path: '/luna/mirrorboards/find-all-public',
        tags: ['mirrorboards']
      }
    })
    .query(async ({ ctx: { luna } }) => {
      const mirrorboards = await luna.services.mirrorboards.findAllPublic();

      return { mirrorboards }
    })
});