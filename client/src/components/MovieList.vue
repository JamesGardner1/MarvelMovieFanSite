<template>
    <div id="movie-list">


        <div class ="d-flex flex-wrap justify-content-around">
            <div class="p-2" v-for="movie in movies" v-bind:key="movie.name">
            <Movie
                    v-bind:movie="movie"
                    v-on:hasWatched="updateWatched"
            ></Movie>
        </div>
       </div>
    </div>
</template>

<script>
    import Movie from "@/components/Movie";

    export default {
        name: "MovieList",
        components: {
            Movie,
        },
        data() {
            return {
                movies: [],
            }
        },
        mounted() {
            this.getAll()
        },
        methods: {
            getAll() {
                this.$movieService.getAll().then(data => {
                    this.movies = data
                })
            },
            updateWatched(movieName, movieWatched) {
                this.$movieService.setWatched(movieName, movieWatched).then(data => {
                    this.getAll()
                })
            }
        },

    }
</script>

<style scoped>

</style>