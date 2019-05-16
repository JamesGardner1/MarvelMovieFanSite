import Router from 'vue-router'

import MovieList from '@/components/MovieList'
import About from '@/components/About'
import MovieDetail from '@/components/MovieDetail'


export default new Router({
    routes: [
        {
            path: '/',
            component: MovieList
        },
        {
            path:'/about',
            component: About
        },
        {
            path: '/detail/:movie',
            name: 'detail',
            component: MovieDetail
        }
    ]
})