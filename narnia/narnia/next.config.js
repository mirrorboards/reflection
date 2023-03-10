const withTM = require("next-transpile-modules")(
  [
    "luna-sdk",
    "narnia-trpc",
    "narnia-trpc-context",
    "auth-trpc",
    "openai-sdk",
    "openai-trpc"
  ]
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withTM(nextConfig);
