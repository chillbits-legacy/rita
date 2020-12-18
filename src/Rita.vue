<template>
  <div class="rita awesome" v-if="ready">
    <edit-button @click="handleEditButtonClick" label="Edit"/>
    <modal :visible="modalVisible"/>
  </div>
  <div class="rita broken" v-else>
    <p>Could not run the app at the moment.</p>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import EditButton from './components/EditButton.vue'
import Modal from './components/Modal.vue'
import useMediaJsonParser from './composables/useMediaJsonParser'

/**
 * Rita is a mini app that helps PhotoMart's customer to update their uploaded
 * photos' quantity.
 *
 * This is the main app/component.
 * We manage our statements and components here.
 */
export default {
  name: 'Rita',

  components: {
    EditButton,
    Modal,
  },

  props: {
    mediaJson: {
      type: String,
      required: true,
    },
  },

  /**
   * The main controller using Vue 3 way
   *
   * @param props
   * @returns {{modalVisible: Ref<UnwrapRef<boolean>>, ready: ComputedRef<*>}}
   */
  setup (props) {
    /**
     * Modal visible or not
     *
     * @type {Ref<UnwrapRef<boolean>>}
     */
    const modalVisible = ref(false)

    /**
     * The props that passed into our app
     */
    const { mediaJson } = props

    const {
      isMediaGood,
      media,
    } = useMediaJsonParser(mediaJson)

    const ready = computed(() => {
      return isMediaGood
    })

    const handleEditButtonClick = (event) => {
      modalVisible.value = true
    }

    return {
      ready,
      modalVisible,
      handleEditButtonClick,
    }
  },
}
</script>
