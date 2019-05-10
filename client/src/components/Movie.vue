<template xmlns="http://www.w3.org/1999/html">
    <div class="movie-summary p-2 rounded">

        <span class="m-2">{{ movie.name }}</span>
        <p><span class ="m-3">{{ movie.bio }}</span>
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
        }
    }
</script>

<style scoped>
    .movie-summary {
        height: 8cm;
        width: 20cm;
        border: 1px #505011 solid;
        background-color: black;
    }
    .m-2 {
        font-weight: bold;
        color: darkgoldenrod;
    }
    .m-3 {
        color: burlywood;
    }

</style>