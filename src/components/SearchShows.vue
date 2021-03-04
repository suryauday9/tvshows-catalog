<template>
    <v-container grid-list-lg v-if="showSearchbar">
        <v-layout row wrap>
            <v-flex xs12 sm12 md12 lg12>
                <v-text-field
                    prepend-inner-icon="mdi-magnify"
                    rounded
                    outlined
                    solo
                    clearable
                    color="blue darken-2"
                    dark
                    autofocus
                    placeholder="Search Shows"
                    v-on:keyup="searchShows" 
                    v-model="searchText"
                    @click:clear="clearSearch"
                />
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'SearchShows',
    data() {
        return {
            searchText: '',
        }
    },
    computed: {
        showSearchbar() {
            return this.$store.state.showSearchbar;
        }
    },
    watch: {
        'showSearchbar': function (value) {
            if(!value) this.clearSearch();
        }
    },
    methods: {
        searchShows() {
            if(this.searchText && this.searchText.length >= 3) {
                this.$store.dispatch('getShowsBySearch', this.searchText);
            } else {
                this.$store.dispatch('getShowslist');
            }
        },
        clearSearch() {
            this.searchText = "";
            this.searchShows();
        }
    }
};
</script>

<style scoped>
    .selected-text {
        font-size: 16px !important;
        font-weight: 500;
        display: block;
        margin: 6px 9px;
        text-align: center;
    }
</style>
