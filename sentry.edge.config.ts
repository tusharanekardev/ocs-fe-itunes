import * as Sentry from "@sentry/nextjs";
import { env } from "./env.mjs";

Sentry.init({
  dsn: env.SENTRY_DSN_TOKEN,

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

});
