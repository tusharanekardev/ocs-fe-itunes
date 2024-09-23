import withBundleAnalyzer from "@next/bundle-analyzer"
import createNextIntlPlugin from "next-intl/plugin"
import withPlugins from "next-compose-plugins"
import { env } from "./env.mjs"
import { withSentryConfig } from "@sentry/nextjs";

const withNextIntl = createNextIntlPlugin("./app/i18n/request.ts")

/**
 * @type {import('next').NextConfig}
 */
const config = withPlugins([
  [withBundleAnalyzer({ enabled: env.ANALYZE })],
], {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: { instrumentationHook: true },
  rewrites() {
    return [
      { source: "/healthz", destination: "/api/health" },
      { source: "/api/healthz", destination: "/api/health" },
      { source: "/health", destination: "/api/health" },
      { source: "/ping", destination: "/api/health" },
    ]
  },
})

export default withSentryConfig(withNextIntl(config), {
  silent: false,
  org: "ws-9m",
  project: "ts-next",
})
