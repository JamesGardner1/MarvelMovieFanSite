<template>
    <div class="header">

    <div class="jumbotron">
        <h1 class="display-4" id="endgame">Are You Ready For The Endgame?</h1>
    </div>


    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style scoped>
    .jumbotron {
        background-image: url('../../../public/images/avengersready.jpg');
        background-position: center;
        background-size: cover;
        /* Grays out header */
        background-blend-mode: luminosity;
        ;

    }
    #endgame {
        font-weight: 600;
        color:darkgoldenrod;
    }

</style>