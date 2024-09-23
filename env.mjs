import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    ANALYZE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
    SENTRY_DSN_TOKEN: z.string().optional(),
  },
  client: {
  },
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
    SENTRY_DSN_TOKEN: process.env.SENTRY_DSN_TOKEN,
  },
})
