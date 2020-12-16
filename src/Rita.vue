<template>
  <h1>Rita - {{mediaId}}</h1>
  <a-button>Button</a-button>
</template>

<script>
export default {
  name: 'Rita',
  props: {
    mediaId: String
  }
}
</script>
