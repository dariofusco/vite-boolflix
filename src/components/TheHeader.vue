<script>
import { store, searchFilm } from "../store"
export default {
    data() {
        return {
            store
        };
    },
    methods: {
        searchFilm
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
                <input class="bg-light mx-2" v-model="store.filmToSearch" type="cerca" placeholder="Cerca"
                    aria-label="Cerca" name="cerca">
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
