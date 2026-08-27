<script setup lang="ts">
const { isOpen, close } = useWaitlistModal()

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const firstName = ref('')
const email = ref('')
const businessName = ref('')

type FieldErrors = Partial<Record<'firstName' | 'email' | 'businessName', string>>

const fieldErrors = ref<FieldErrors>({})
const generalError = ref('')
const status = ref<'idle' | 'submitting' | 'success'>('idle')

const headingId = 'waitlist-modal-heading'

function resetForm() {
  firstName.value = ''
  email.value = ''
  businessName.value = ''
  fieldErrors.value = {}
  generalError.value = ''
  status.value = 'idle'
}

function validate(): FieldErrors {
  const errors: FieldErrors = {}

  const trimmedFirstName = firstName.value.trim()
  if (trimmedFirstName === '') {
    errors.firstName = 'First name is required.'
  }

  const trimmedEmail = email.value.trim()
  if (trimmedEmail === '') {
    errors.email = 'Email is required.'
  } else if (!EMAIL_PATTERN.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address.'
  }

  return errors
}

async function handleSubmit() {
  const errors = validate()
  fieldErrors.value = errors
  generalError.value = ''

  if (Object.keys(errors).length > 0) {
    return
  }

  status.value = 'submitting'

  try {
    await $fetch('/api/waitlist', {
      method: 'POST',
      body: {
        firstName: firstName.value.trim(),
        email: email.value.trim(),
        businessName: businessName.value.trim(),
      },
    })

    status.value = 'success'
  } catch (error: any) {
    status.value = 'idle'

    const data = error?.data

    if (data && typeof data === 'object' && data.errors && typeof data.errors === 'object') {
      fieldErrors.value = data.errors as FieldErrors
    } else {
      generalError.value = 'Could not add you to the list right now. Please try again.'
    }
  }
}

function handleBackdropClick() {
  close()
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    close()
  }
}

watch(isOpen, (open) => {
  if (open) {
    resetForm()
    if (import.meta.client) {
      window.addEventListener('keydown', handleKeydown)
    }
  } else if (import.meta.client) {
    window.removeEventListener('keydown', handleKeydown)
  }
})

onBeforeUnmount(() => {
  if (import.meta.client) {
    window.removeEventListener('keydown', handleKeydown)
  }
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-stone-900/60 p-4"
      @click.self="handleBackdropClick"
    >
      <div
        role="dialog"
        aria-modal="true"
        :aria-labelledby="headingId"
        class="relative w-full max-w-md rounded-lg bg-stone-50 p-8 shadow-panel"
      >
        <button
          type="button"
          aria-label="Close"
          class="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-md text-stone-600 hover:bg-stone-100 hover:text-stone-900"
          @click="close"
        >
          <i class="ti ti-x text-xl/6" aria-hidden="true" />
        </button>

        <template v-if="status === 'success'">
          <h2 :id="headingId" class="text-lg font-semibold text-stone-900">
            You're on the list
          </h2>
          <p class="mt-3 text-sm/6 text-stone-600">
            We'll email you when Fibermade opens.
          </p>
        </template>

        <template v-else>
          <h2 :id="headingId" class="text-lg font-semibold text-stone-900">
            Join the launch list
          </h2>
          <p class="mt-2 text-sm/6 text-stone-600">
            Be first to know when Fibermade opens.
          </p>

          <p
            v-if="generalError"
            class="mt-4 rounded-md bg-terracotta-tint px-4 py-3 text-sm/6 text-terracotta-deep"
          >
            {{ generalError }}
          </p>

          <form class="mt-6 flex flex-col gap-4" novalidate @submit.prevent="handleSubmit">
            <div>
              <label for="waitlist-first-name" class="block text-sm font-medium text-stone-900">
                First name
              </label>
              <input
                id="waitlist-first-name"
                v-model="firstName"
                type="text"
                required
                autocomplete="given-name"
                class="mt-1.5 block w-full rounded-md border border-stone-300 px-3 py-2 text-sm text-stone-900 placeholder:text-stone-500 focus:border-terracotta focus:ring-1 focus:ring-terracotta focus:outline-none"
                :aria-invalid="!!fieldErrors.firstName"
                :aria-describedby="fieldErrors.firstName ? 'waitlist-first-name-error' : undefined"
              >
              <p
                v-if="fieldErrors.firstName"
                id="waitlist-first-name-error"
                class="mt-1.5 text-sm text-terracotta-deep"
              >
                {{ fieldErrors.firstName }}
              </p>
            </div>

            <div>
              <label for="waitlist-email" class="block text-sm font-medium text-stone-900">
                Email address
              </label>
              <input
                id="waitlist-email"
                v-model="email"
                type="email"
                required
                autocomplete="email"
                class="mt-1.5 block w-full rounded-md border border-stone-300 px-3 py-2 text-sm text-stone-900 placeholder:text-stone-500 focus:border-terracotta focus:ring-1 focus:ring-terracotta focus:outline-none"
                :aria-invalid="!!fieldErrors.email"
                :aria-describedby="fieldErrors.email ? 'waitlist-email-error' : undefined"
              >
              <p
                v-if="fieldErrors.email"
                id="waitlist-email-error"
                class="mt-1.5 text-sm text-terracotta-deep"
              >
                {{ fieldErrors.email }}
              </p>
            </div>

            <div>
              <label for="waitlist-business-name" class="block text-sm font-medium text-stone-900">
                Business name (optional)
              </label>
              <input
                id="waitlist-business-name"
                v-model="businessName"
                type="text"
                autocomplete="organization"
                class="mt-1.5 block w-full rounded-md border border-stone-300 px-3 py-2 text-sm text-stone-900 placeholder:text-stone-500 focus:border-terracotta focus:ring-1 focus:ring-terracotta focus:outline-none"
                :aria-invalid="!!fieldErrors.businessName"
                :aria-describedby="fieldErrors.businessName ? 'waitlist-business-name-error' : undefined"
              >
              <p
                v-if="fieldErrors.businessName"
                id="waitlist-business-name-error"
                class="mt-1.5 text-sm text-terracotta-deep"
              >
                {{ fieldErrors.businessName }}
              </p>
            </div>

            <button
              type="submit"
              :disabled="status === 'submitting'"
              class="mt-2 inline-flex h-12 w-full items-center justify-center rounded-lg bg-terracotta px-8 text-[15px] font-semibold whitespace-nowrap text-stone-50 shadow-cta hover:bg-terracotta-dark disabled:cursor-not-allowed disabled:opacity-70"
            >
              {{ status === 'submitting' ? 'Joining…' : 'Join the list' }}
            </button>
          </form>
        </template>
      </div>
    </div>
  </Teleport>
</template>
