export interface WaitlistInput {
  firstName: string
  email: string
  businessName?: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateWaitlistInput(
  body: unknown,
): { data: WaitlistInput } | { errors: Record<string, string> } {
  const errors: Record<string, string> = {}

  const source = (typeof body === 'object' && body !== null ? body : {}) as Record<string, unknown>

  const rawFirstName = source.firstName
  const firstName = typeof rawFirstName === 'string' ? rawFirstName.trim() : ''
  if (typeof rawFirstName !== 'string' || firstName === '') {
    errors.firstName = 'First name is required.'
  }

  const rawEmail = source.email
  const email = typeof rawEmail === 'string' ? rawEmail.trim() : ''
  if (typeof rawEmail !== 'string' || email === '') {
    errors.email = 'Email is required.'
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Please enter a valid email address.'
  }

  const rawBusinessName = source.businessName
  let businessName: string | undefined
  if (rawBusinessName !== undefined && rawBusinessName !== null) {
    if (typeof rawBusinessName !== 'string') {
      errors.businessName = 'Business name must be text.'
    } else {
      const trimmed = rawBusinessName.trim()
      if (trimmed !== '') {
        businessName = trimmed
      }
    }
  }

  if (Object.keys(errors).length > 0) {
    return { errors }
  }

  const data: WaitlistInput = { firstName, email }
  if (businessName) {
    data.businessName = businessName
  }

  return { data }
}

export function buildMailerLiteSubscriberPayload(data: WaitlistInput, groupId: string) {
  return {
    email: data.email,
    fields: {
      name: data.firstName,
      ...(data.businessName ? { company: data.businessName } : {}),
    },
    groups: [groupId],
  }
}
