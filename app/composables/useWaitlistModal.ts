/**
 * Shared open/close state for the "join the launch list" waitlist modal.
 *
 * Backed by `useState` so the flag is per-request on the server (no
 * cross-visitor leakage during SSR/prerendering) and a singleton in the
 * browser, letting any button open the modal and `WaitlistModal.vue`
 * react to it.
 */
export function useWaitlistModal() {
  const isOpen = useState<boolean>('waitlist-modal-open', () => false)

  function open() {
    isOpen.value = true
  }

  function close() {
    isOpen.value = false
  }

  return {
    isOpen,
    open,
    close,
  }
}
