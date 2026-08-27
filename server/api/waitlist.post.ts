import { buildMailerLiteSubscriberPayload, validateWaitlistInput } from '../utils/waitlist'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const result = validateWaitlistInput(body)

  if ('errors' in result) {
    setResponseStatus(event, 400)
    return { ok: false, errors: result.errors }
  }

  const { data } = result
  const config = useRuntimeConfig(event)

  if (!config.mailerliteApiKey || !config.mailerliteGroupId) {
    setResponseStatus(event, 503)
    return { ok: false, error: 'Signup is not configured.' }
  }

  try {
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${config.mailerliteApiKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(buildMailerLiteSubscriberPayload(data, config.mailerliteGroupId)),
    })

    if (!response.ok) {
      const errorBody = await response.text().catch(() => '')
      console.error('MailerLite subscriber request failed', response.status, errorBody)
      setResponseStatus(event, 502)
      return { ok: false, error: 'Could not add you to the list right now.' }
    }

    setResponseStatus(event, 200)
    return { ok: true }
  } catch (error) {
    console.error('MailerLite subscriber request threw', error)
    setResponseStatus(event, 502)
    return { ok: false, error: 'Could not add you to the list right now.' }
  }
})
