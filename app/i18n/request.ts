import { getRequestConfig } from "next-intl/server"

export default getRequestConfig(async () => {
  const locale = "en"

  // Get the user's timezone
  // eslint-disable-next-line sonarjs/new-cap
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
    timeZone: userTimeZone,
  }
})
