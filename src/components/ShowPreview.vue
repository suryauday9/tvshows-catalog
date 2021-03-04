<template>
  <div v-if="show">
      <v-card
        class="ma-1"
        height="180"
        width="180"
        @click="viewDetails(show.id)"
      >
        <v-img
          v-if="show.image != null"
          :src="show.image.medium"
          height="180"
          class="white--text align-end"
        >
          <v-card-title class="subtitle-2 black pa-1">
            <div class="d-flex align-center show-name">
              {{ show.name }}
            </div>
            <div class="d-flex align-center show-rating" v-if="show.rating && show.rating.average">
              {{ show.rating.average }}
              <v-icon color="red">mdi-star</v-icon>
            </div>
          </v-card-title>
        </v-img>
        <v-img
          v-else
          :src="require('../assets/tv-show-img.jpg')"
          height="180"
          class="white--text align-end"
        >
          <v-card-title class="subtitle-2 black pa-3">
            {{ show.name }}
          </v-card-title>
        </v-img>
      </v-card>
  </div>
</template>

<script>
export default {
  name: "ShowPreview",
  props: {
    show: {}
  },
  methods: {
    viewDetails(id) {
      this.$router.push({ name: "show", params: { id: id } });
    }
  }
};
</script>
<style scoped>
.show-name {
  width: 100%;
  display: block !important;
}
.show-rating {
  width: 100%;
  display: block !important;
}
</style>
