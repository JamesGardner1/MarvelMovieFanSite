import axios from 'axios'

export default {
    getAll() {
        return axios.get('/api/movies/').then( response => {
            return response.data
        })
    },

    setWatched(movieName, watched) {
        return axios.patch('/api/movie/' + movieName, { watched: watched}).then(response => {
            return response.data
        })
    },

    getOne(movieName) {
        return axios.get('/api/movies/' + movieName).then( response => {
            return response.data
        })
    }
}