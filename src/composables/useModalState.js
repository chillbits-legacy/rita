import { ref } from 'vue'

/**
 * These functions provide context to interact with modal
 */
export default function useModalState () {
  /**
   * Modal visible or not
   *
   * @type {Ref<UnwrapRef<boolean>>}
   */
  const modalShowing = ref(false)

  function showModal () {
    modalShowing.value = true
  }

  function hideModal () {
    modalShowing.value = false
  }

  return {
    modalShowing,
    showModal,
    hideModal
  }
}