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
import { ref, watch, toRef } from 'vue'

export default {
  name: 'Modal',

  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['update:show'],

  setup (props, { emit }) {
    const loading = ref(false)
    const visible = toRef(props, 'show')

    /**
     * Handle button OK click
     */
    function handleOk () {
      loading.value = true

      setTimeout(() => {
        emit('update:show', false)
        loading.value = false
      }, 1000)
    }

    /**
     * Handle button Cancel click
     */
    function handleCancel () {
      emit('update:show', false)
    }

    return {
      loading,
      visible,
      handleOk,
      handleCancel,
    }
  },

}
</script>
