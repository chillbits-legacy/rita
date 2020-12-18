<template>
  <div class="edit-button">
    <a-button @click="handleClick">{{ label }}</a-button>
  </div>
</template>

<script>
export default {
  name: 'EditButton',

  props: {
    label: {
      type: String,
      default: 'Edit',
    },
  },

  emits: ['click'],

  /**
   *
   * @param props
   * @param emit
   * @returns {{handleClick: handleClick}}
   */
  setup (props, { emit }) {
    /**
     * Handle button click
     */
    function handleClick () {
      emit('click')
    }

    return {
      handleClick,
    }
  },
}
</script>
