<template>
  <v-footer color="blue-grey darken-3">
    <div id="nav" class="nav-links">
      <router-link to="/">Home</router-link>
    </div>
    <v-col class="text-right white--text">
      <strong>copyright &copy; 2021 </strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "PageFooter"
};
</script>
<style scoped>
#nav a {
  color: #1976d2;
}
</style>
