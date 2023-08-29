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
            <div class="card bg-light m-3 p-2" style="width: 18rem;" v-for="film in store.filmList">
                <img class="card-img-top" :src="`https://image.tmdb.org/t/p/w342${film.poster_path}`" alt="Card image cap">
                <div class="card-body">
                    <ul>
                        <li> Title: {{ film.title }}</li>
                        <li> Original Title: {{ film.original_title }}</li>
                        <li> Language: <img class="flag"
                                :src="`https://flagsapi.com/${film.original_language.toUpperCase()}/flat/64.png`">{{
                                    film.original_language.toUpperCase() }}</li>
                        <li> Vote: {{ Math.floor(film.vote_average / 2) }} <i class="fa-solid fa-star"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.flag {
    width: 30px;
}

i {
    color: rgba(250, 233, 0, 0.932);
}
</style>