import { initTRPC } from "@trpc/server";
import superjson from 'superjson';
import { OpenApiMeta } from 'trpc-openapi';
import { NarniaContext } from "narnia-trpc-context";

import { router as auth } from 'auth-trpc';
import { router as openai } from 'openai-trpc';

const t = initTRPC.meta<OpenApiMeta>().context<NarniaContext>().create({
  transformer: superjson
});

export const router = t.router({ auth, openai });
export type NarniaRouter = typeof router;
