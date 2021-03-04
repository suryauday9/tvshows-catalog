<template>
  <div>
    <v-sheet class="mx-auto white darken-4">
      <div class="headline font-weight-bold blue-grey--text mx-12 mt-12">
        {{ genre }}
      </div>
      <v-slide-group class="pa-4" show-arrows="desktop" light>
        <v-slide-item v-for="show in showsByGenre(shows, genre)" :key="show.id">
          <show-preview :show="show" />
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
import ShowPreview from "../components/ShowPreview.vue";
export default {
  name: "ListContainer",
  components: {
    ShowPreview
  },
  props: {
    genre: String
  },
  methods: {
    showsByGenre: function (shows, genre) {
      return shows
        .filter((show) => show.genres && show.genres.some((g) => g === genre))
        .slice(0, 19)
    }
  },
  computed: {
    shows() {
        return this.$store.state.shows;
    }
  }
};
</script>
<style scoped>
.headline {
  text-align: left;
  text-decoration: underline;
}
</style>