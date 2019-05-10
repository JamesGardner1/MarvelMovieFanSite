<template>
    <div id="movie-list">

        <div class ="p-2" v-for="movie in movies" v-bind:key="movie.name">
            <Movie v-bind:movie="movie"></Movie>
        </div>
       </div>
</template>

<script>
    import Movie from "@/components/Movie";

    export default {
        name: "MovieList",
        components: {
            Movie
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
        }

    }
</script>

<style scoped>

</style>