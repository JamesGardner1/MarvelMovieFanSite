import Router from 'vue-router'

import MovieList from '@/components/MovieList'


export default new Router({
    routes: [
        {
            path: '/',
            component: MovieList
        }
    ]
})