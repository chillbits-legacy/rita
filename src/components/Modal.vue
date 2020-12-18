<template>
  <div class="modal">
    <a-modal v-model:visible="visible" title="Title" @ok="handleOk">
      <template #footer>
        <a-button key="back" @click="handleCancel">
          Return
        </a-button>
        <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
          Submit
        </a-button>
      </template>
      Modal Content
    </a-modal>
  </div>
</template>

<script>
export default {
  name: 'Modal',

  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      loading: false
    }
  },

  methods: {
    /**
     * Handle button OK click
     */
    handleOk() {
      this.loading = true
      setTimeout(() => {
        this.setVisible(false)
        this.loading = false
      }, 1000)
    },

    /**
     * Handle button Cancel click
     */
    handleCancel() {
      this.setVisible(false)
    }
  }
}
</script>
