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
import EditButton from './components/EditButton.vue'
import Modal from './components/Modal.vue'
import InteractsWithMediaJson from './mixins/InteractsWithMediaJson'

/**
 * Rita is a mini app that helps PhotoMart's customer to update their uploaded
 * photos' quantity.
 *
 * This is the main app/component.
 * We manage our statements and components here.
 */
export default {
  name: 'Rita',

  props: {
    media: {
      type: String,
      required: true
    }
  },

  mixins: [
    InteractsWithMediaJson,
  ],

  data () {
    return {
      modalVisible: false
    }
  },

  components: {
    EditButton,
    Modal,
  },

  computed: {
    /**
     * Determines if the app is ready to render
     *
     * @returns {boolean}
     */
    ready () {
      if (this.media) {
        return this.validate(this.media)
      }

      return false
    }
  },

  methods: {
    /**
     * Handle when edit button clicked
     */
    handleEditButtonClick () {
      this.modalVisible = true
    },
  },
}
</script>
