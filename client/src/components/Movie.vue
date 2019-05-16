<template>
    <div class="movie-summary p-2 rounded">

        <span class="m-2">{{ movie.name }}</span>
            <p>
                <img v-bind:src="movie.picture">
                <span class ="m-3">{{ movie.bio }}</span>
                <input id="watched" class="r-2" type="checkbox"
                v-model="movieWatched" v-on:change="$emit('hasWatched', movieName, movieWatched)">Have Seen
            </p>

        <p>
            <router-link v-bind:to="{ name: 'detail', params: { movie: movieName } }">
                <div class="watchTrailer"> Watch Trailer Here</div>
            </router-link>
        </p>

    </div>

</template>



<script>
    export default {
        name: 'Movie',
        props: {
            movie: Object
        },
        data() {
            return {
                movieName: this.movie.name,
                movieWatched: this.movie.watched,
            }
        },

    }
</script>

<style scoped>
    .movie-summary {
        border: 1px #505011 solid;
        background-size: cover;
        background-color: black;
        background-position: left;
    }
    .m-2 {
        font-weight: bold;
        color: darkgoldenrod;
    }
    .m-3 {
        color: burlywood;
        position: center;
        text-wrap: normal;
    }
    .r-2 {

        background-position: center;
    }
    .watchTrailer {
        font-weight: bold;
        color: red;
    }

</style>