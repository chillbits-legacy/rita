<template>
  <div class="rita awesome" v-if="ready">
    <edit-button @click="handleEditButtonClick" label="Edit"/>
    <modal v-model:show="modalShowing">
      Modal Content
    </modal>
  </div>
  <div class="rita broken" v-else>
    <p>Could not run the app at the moment.</p>
  </div>
</template>

<script>
import { computed } from 'vue'
import EditButton from './components/EditButton.vue'
import Modal from './components/Modal.vue'
import useMediaJsonParser from './composables/useMediaJsonParser'
import useModalState from './composables/useModalState'

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
     * The props that passed into our app
     */
    const { mediaJson } = props

    /**
     * @var isMediaGood {boolean} Determines if the media json input
     *                            is good for the app.
     * @var media       {object}  Contains parsed media information from the JSON.
     */
    const {
      isMediaGood,
      media,
    } = useMediaJsonParser(mediaJson)

    /**
     * @var modalShowing  {boolean}
     * @var showModal     Function
     */
    const {
      modalShowing,
      showModal,
    } = useModalState()

    /**
     * Tell the template if it's ready to render
     *
     * @type {ComputedRef<*>}
     */
    const ready = computed(() => {
      return isMediaGood
    })

    /**
     * Handle when edit button clicked
     */
    function handleEditButtonClick () {
      showModal()
    }

    return {
      ready,
      modalShowing,
      handleEditButtonClick,
    }
  },
}
</script>
