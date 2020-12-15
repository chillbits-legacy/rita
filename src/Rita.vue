<template>
  <h1>Rita - {{mediaId}}</h1>
  <UpdateButton label="Change quantity" />
</template>

<script>
import UpdateButton from './components/UpdateButton.vue'

export default {
  name: 'Rita',
  props: {
    mediaId: String
  },
  components: {
    UpdateButton
  }
}
</script>
