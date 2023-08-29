<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import FilmList from "./components/FilmList.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    FilmList,
}

}
</script>

<template>
<TheHeader></TheHeader>
<main>
<FilmList></FilmList>
</main>
<TheFooter></TheFooter>
</template>

<style lang="scss">
main {
  background-color: rgb(49, 49, 49);
}
</style>
