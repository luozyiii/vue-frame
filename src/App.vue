<template>
  <div id="app">
    <!-- keep-alive include 属性? -->
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
