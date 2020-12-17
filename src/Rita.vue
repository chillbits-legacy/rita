<template>
  <div class="rita" v-if="ready">
    <h2>Update your photo quantity</h2>
    <edit-button label="Edit"/>
    <modal/>
  </div>
  <div clas="rita broken" v-else>
    <p>Could not run the app at the moment.</p>
  </div>
</template>

<script>
import EditButton from './components/EditButton'
import Modal from './components/Modal'

export default {
  name: 'Rita',
  props: {
    media: String,
  },
  data () {
    return {
      bree_item_id: null,
      session_id: null,
      photos: null,
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
    },
  },

  methods: {
    /**
     * Validate initial media data from props
     *
     * @param input
     * @returns {boolean}
     */
    validate (input) {
      try {
        input = JSON.parse(input)
        return this.parseMedia(input)
      } catch (exception) {
        return false
      }
    },

    /**
     * Parse media json from props
     *
     * @param input
     * @returns {boolean}
     */
    parseMedia (input) {
      const {
        bree_item_id,
        media: {
          session_id,
          photos,
        },
      } = input

      if (bree_item_id && session_id) {
        this.bree_item_id = bree_item_id
        this.session_id = session_id
      }

      if (this.isValidPhotos(photos)) {
        this.photos = photos
      }

      return true
    },

    /**
     * Validate the photos data
     *
     * @param photos
     * @returns {boolean}
     */
    isValidPhotos (photos) {
      if (Array.isArray(photos) && photos.length > 0) {
        photos.forEach((photo) => {
          const {
            file_id,
            thumbnail_url,
            quantity,
          } = photo

          if (!(file_id && thumbnail_url && quantity)) {
            throw 'Photo data does not valida'
          }
        })

        return true
      }
    },
  },
}
</script>
