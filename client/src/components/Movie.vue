<template>
    <div class="movie-summary p-2 rounded">

        <span class="m-2">{{ movie.name }}</span>
            <p>
                <img v-bind:src="movie.picture">
            <span class ="m-3">{{ movie.bio }}</span>
            <input id="seen" class="r-2" type="checkbox"></p>


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
    }

</style>