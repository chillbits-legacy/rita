/**
 * This mixins provide data and methods to interacts with media json
 *
 * @type {{data(): {session_id: null, bree_item_id: null, photos: null}, methods: {parseMedia(*): boolean, isValidPhotos(*=): boolean, validate(*=): boolean}}}
 */
const InteractsWithMediaJson = {
  data () {
    return {
      bree_item_id: null,
      session_id: null,
      photos: null,
    }
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
            throw 'Photo data does not valid'
          }
        })

        return true
      }
    },
  },
}

export default InteractsWithMediaJson