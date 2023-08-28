<script>
import { store, searchFilm } from "../store";
export default {
    data() {
        return {
            store
        }
    },
    methods: {
        searchFilm
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-3" v-for="film in store.filmList">
                <ul>
                    <li> Title: {{ film.title }}</li>
                    <li> Original Title: {{ film.original_title }}</li>
                    <li> Language: {{ film.original_language }}</li>
                    <li> Vote: {{ film.vote_average }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>