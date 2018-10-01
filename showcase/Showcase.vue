<template>
  <div class="showcase">
    <div class="sidebar">sidebar</div>
    <div class="content">
      <!-- <div v-for="page in PAGES" :key="page"></div> -->
      <page-button></page-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'showcase',
  components: {}
}
</script>

<style lang="scss" scoped>
.showcase {
  display: flex;
}

.sidebar {
  flex-basis: 20%;
}

.content {
  flex-basis: 80%;
}
</style>
