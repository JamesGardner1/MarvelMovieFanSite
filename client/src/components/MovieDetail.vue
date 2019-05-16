<template>
    <div class="movie-detail p-2">

        <h2> {{ movie.name }}</h2>

        <p v-if="movie.watched">You have seen {{ movie.name}}</p>
        <p v-else> You have not seen {{movie.name}} yet</p>
    </div>
</template>

<script>
    export default {
        name: 'MovieDetail',
        data () {
            return {
                movie: {
                    name: ''
                }
            }
        },
        mounted() {
            this.movie.name = this.$route.params.movie
            this.fetchMovieData()
        },
        methods: {
            fetchMovieData() {
                this.$movieService.getOne( this.movie.name ).then( data => {
                this.movie = data
                }).catch( err => console.error(err))
            }
        }
    }
</script>

<style scoped>

</style>