<template>
    <v-container grid-list-lg>
        <v-layout row wrap> 
            <v-sheet
                class="mx-auto"
                max-width="100%"
            >
                <v-slide-group
                    multiple
                    show-arrows
                >
                    <v-slide-item
                        v-for="genre in genres"
                        :key="'genre-' + genre"
                        class="pr-4"
                        v-slot="{ active, toggle }"
                    >
                        <v-btn
                        class="mx-2"
                        :input-value="active"
                        active-class="purple white--text"
                        depressed
                        rounded
                        @click="toggle"
                        >
                        {{ genre }}
                        </v-btn>
                    </v-slide-item>
                </v-slide-group>
            </v-sheet>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'ShowsList',
    props: {
        genresData: Array,
    },
    data () {
        return {
            genres: this.genresData ? this.genresData : [],      
        }
    }
};
</script>

<style scoped>
ul,
ol {
  padding-left: 24px;
}
.title {
  font-size: 20px !important;
  font-weight: 800;
  line-height: 1 !important;
  letter-spacing: 0.02em !important;
  font-family: 'Roboto', sans-serif !important;
}
.subheading {
  font-size: 16px !important;
  font-weight: 500;
  margin: 6px 9px;
  text-align: left;
}
.recipe-details {
    margin: 3px 12px;
}
.recipe-desc {
    text-align: left;
    padding: 6px 9px;
}
ul.items-list {
    text-align: left;
}
.videoframe {
    width: 96%;
    height: 270px;
}
</style>
