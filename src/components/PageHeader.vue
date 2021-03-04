<template>
  <div class="home">
    <v-app-bar app color="blue-grey darken-3" dark flat>
      <router-link :to="{ name: 'showsCatalog' }" style="text-decoration: none">
        <v-btn text large>
          <v-icon x-large>mdi-youtube-tv</v-icon>
          <v-toolbar-title class="headline mx-5 display-1 font-weight-bold">
            <span class="display-1 text-uppercase font-weight-medium">TV </span>
            <span class="display-1 text-uppercase font-weight-light">Shows</span>
          </v-toolbar-title>
        </v-btn>
      </router-link>
      <v-spacer></v-spacer>
      <v-btn id='searchBar' v-if="$route.name === 'showsCatalog'" icon @click="showSearchbar()">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    showSearchbar() {
      this.$store.dispatch('getSearchbarStatus');
    }
  }
};
</script>
