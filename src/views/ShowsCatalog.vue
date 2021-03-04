<template>
    <div>
        <div class="searchshow-container">
            <search-shows></search-shows>
        </div>
        <div class="genre-shows-container" v-if="genres.length">
            <div v-for="(list, index) in genres" :key="index">
                <list-container :genre="list" />
            </div>
        </div>
        <div v-else>
            No shows found / No shows found with this search term.
        </div>
    </div>
</template>

<script>
import SearchShows from '../components/SearchShows.vue';
import ListContainer from "../components/ListContainer.vue";

export default {
    name: 'ShowsCatalog',
    components: {
        SearchShows,
        ListContainer
    },
    methods: {
        initialize() {
            this.$store.dispatch('getShowslist');
        }
    },
    created() {
        this.initialize();
    },
    computed: {
        genres() {
            return this.$store.state.genres;
        }
    }
};
</script>

<style scoped></style>
