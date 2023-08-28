<script>
//import axios from "axios";
import { store, searchFilm} from "../store"
export default {
    data() {
        return {
            //filmToSearch: "",
            //filmList: [],
            store
        };
    },
    methods: {
        searchFilm
        /*searchFilm() {
            axios
                .get("https://api.themoviedb.org/3/search/movie", {
                    params: {
                        api_key: "0622583111517058bf60e98d473372de",
                        query: this.filmToSearch,
                    }
                })
                .then((response) => {
                    this.filmList = response.data.results;
                    console.log(response.data.results);
                });
        },*/
    },
    mounted() {

    },

};
</script>

<template>
    <header>
        <nav class="navbar navbar-light bg-black px-3">
            <a class="navbar-brand">Boolflix</a>
            <div class="d-flex">
                <input class="bg-light mx-2" v-model="store.filmToSearch" type="cerca" placeholder="Cerca" aria-label="Cerca"
                    name="cerca">
                <button class="btn btn-outline-danger mx-2" @click="searchFilm()">Cerca</button>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
.navbar-brand {
    color: red;
    font-size: 2rem;
}
</style>
