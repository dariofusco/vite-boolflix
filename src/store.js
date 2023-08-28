import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
    filmToSearch: "",
    filmList: [],
})

export function searchFilm() {
    axios
        .get("https://api.themoviedb.org/3/search/movie", {
            params: {
                api_key: "0622583111517058bf60e98d473372de",
                query: store.filmToSearch,
            }
        })
        .then((response) => {
            store.filmList = response.data.results;
            console.log(response.data.results);
        });
}