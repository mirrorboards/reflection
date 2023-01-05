import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import { router as openai } from 'openai-trpc';
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { router as lunaRouter } from 'luna-trpc';

const luna = lunaRouter.createCaller({});

export const createContext = async (opts: CreateNextContextOptions) => {
  const token = opts.req.cookies['access_token'] ? opts.req.cookies['access_token'] : null;

  return {
    fetchAuthenticator: async (authenticators: string[]) => {
      return await luna.auth.fetchAuthenticators({ token, authenticators });
    }
  }
}

export type NarniaContext = inferAsyncReturnType<typeof createContext>

const t = initTRPC.context<NarniaContext>().create();

export const router = t.router({ openai });
export type NarniaRouter = typeof router;
