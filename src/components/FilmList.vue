<script>
import { store, searchFilm } from "../store";
export default {
    data() {
        return {
            store
        }
    },
    methods: {
        searchFilm,
        getFlag(language) {
            switch (language) {
                case "en":
                    language = "GB";
                    break;
                case "ja":
                    language = "JP";
                    break;
                case "zh":
                    language = "CN";
                    break;
            };
            return `https://flagsapi.com/${language.toUpperCase()}/flat/64.png`
        },
    },
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="card bg-black m-3 p-2" style="width: 18rem; height: 27rem;" v-for="film in store.filmList">
                <img class="card-img-top" :src="`https://image.tmdb.org/t/p/w342${film.poster_path}`" alt="Card image cap">
                <div class="card-body">
                    <ul>
                        <li> Title: {{ film.title }}</li>
                        <li> Original Title: {{ film.original_title }}</li>
                        <li> Language: <img class="flag" :src="getFlag(film.original_language)">
                            {{ film.original_language.toUpperCase() }}</li>
                        <li> Vote: <i v-for="i in Math.floor(film.vote_average / 2)" class="fa-solid fa-star"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    color: white;
    display: none;
}

.card:hover {
    ul {
        display: block;
    }

    .card-img-top {
        display: none;
    }
}

.flag {
    width: 30px;
    padding: 1px;
}

i {
    color: rgba(250, 233, 0, 0.932);
    padding: 1px;
}
</style>