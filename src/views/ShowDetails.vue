<template>
  <div class="show-details">
    <v-btn class="back-button black white--text" icon @click="goBack()">
      <v-icon>mdi-keyboard-return</v-icon>
    </v-btn>
    <div class="ma-5" v-bind:style="{ backgroundSize: '100% 96%', backgroundImage: 'url(' + backgroundImage + ')' }">
      <v-container>
          <v-row class="black--text py-md-12">
            <v-col class="show-thumbnail-block" cols="12" md="5">
              <v-img
                :src="posterImage"
                class="ml-auto elevation-6"
                contain
                width="390"
              ></v-img>
            </v-col>
            <v-col cols="12" md="7" class="pa-4 yellow lighten-5">
              <h1 class="display-2">
                {{ showDetails.name }}
              </h1>
              <div class="d-flex flex-column pt-2">
                <p class="subtitle-1 ma-0">
                    <v-chip class="white--text purple ma-2">
                      <v-icon small left>mdi-information</v-icon>
                      {{ showDetails.language }}
                    </v-chip>
                </p>    
                <p class="subtitle-1">
                  <v-chip class="white--text teal ma-2" v-for="genre in showDetails.genres" :key="genre">
                      <v-icon small left>mdi-information</v-icon>
                      {{ genre }}
                  </v-chip>
                </p>
                <p
                  class="headline d-flex align-center"
                  v-if="showDetails.rating && showDetails.rating.average"
                >
                  {{ showDetails.rating.average }}
                  <v-icon color="red">mdi-star</v-icon>
                </p>
                <div class="text-left" v-html="showDetails.summary"></div>
              </div>
            </v-col>
          </v-row>
        </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowDetails",
  components: {},
  data() {
    return {
      id: this.$route.params.id
    };
  },
  computed: {
    showDetails() {
        return this.$store.state.showDetails;
    },
    showThumbnails() {
        return this.$store.state.showThumbnails;
    },
    backgroundImage() {
      if (this.showThumbnails.length) {
        const bgImage = this.showThumbnails.filter(
          image => image.type === 'background',
        )[0];
        return bgImage ? bgImage.resolutions.original.url : '';
      }
      return '';
    },
    posterImage() {
      if (this.showThumbnails.length) {
        const psImage = this.showThumbnails.filter(
          image => image.type === 'poster',
        )[0];
        return psImage ? psImage.resolutions.original.url : '';
      }
      return '';
    },
  },
  methods: {
    initialize() {
        this.$store.dispatch('getShowDetails', this.id);
        this.$store.dispatch('getShowThumbnails', this.id);
    },
    goBack() {
      this.$router.back();
    }
  },
  beforeCreate() {
    if(!this.$route.params.id) {
      this.$router.push({ name: "showsCatalog"});
    }
  },
  created() {
    this.initialize();
  }
};
</script>
<style scoped>
.back-button {
  display: block;
  margin: 5px 16px;
}
.show-thumbnail-block {
  padding: 0 12px;
}
</style>
