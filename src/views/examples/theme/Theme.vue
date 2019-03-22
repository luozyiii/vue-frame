<template>
  <div class="view-container">
    <p class="info">info</p>
  </div>
</template>

<script>
export default {
  name: 'theme'
}
</script>

<style lang="scss" scoped>
@import "@/style/color.scss";
.view-container {
  .info {
    font-size: $info-size;
  }
}
</style>
