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
      default: 'Edit'
    }
  },

  methods: {
    /**
     * Handle button click
     */
    handleClick () {
      this.$emit('click')
    },
  },
}
</script>
