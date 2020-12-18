/**
 * This function provide data and methods to interacts with media json
 *
 */
export default function useMediaJsonParser (mediaJson) {
  const { result, parsedMedia } = parseAndValidate(mediaJson)

  return {
    isMediaGood: result,
    media: parsedMedia,
  }
}

/**
 * Validate initial media data from props
 *
 * @param input
 * @returns {boolean}
 */
function parseAndValidate (input) {
  try {
    const parsedMedia = parseMedia(input)
    return {
      result: true,
      parsedMedia,
    }
  } catch (exception) {
    return {
      result: false,
    }
  }
}

/**
 * Parse media json from props
 *
 * @param input
 * @returns {boolean}
 */
function parseMedia (input) {
  input = JSON.parse(input)

  const {
    bree_item_id,
    media: {
      session_id,
      photos,
    },
  } = input

  const media = {}

  if (bree_item_id && session_id) {
    media.bree_item_id = bree_item_id
    media.session_id = session_id
  } else {
    throw 'bree_item_id and session_id not found.'
  }

  if (isValidPhotos(photos)) {
    media.photos = photos
  } else {
    throw 'Photo data do not valid'
  }

  return media
}

/**
 * Validate the photos data
 *
 * @param photos
 * @returns {boolean}
 */
function isValidPhotos (photos) {
  if (Array.isArray(photos) && photos.length > 0) {
    photos.forEach((photo) => {
      const {
        file_id,
        thumbnail_url,
        quantity,
      } = photo

      if (!(file_id && thumbnail_url && quantity)) {
        return false
      }
    })

    return true
  }
}