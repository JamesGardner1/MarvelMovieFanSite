import axios from 'axios'

export default {
    getAll() {
        return axios.get('/api/movies/').then( response => {
            return response.data
        })
    }
}