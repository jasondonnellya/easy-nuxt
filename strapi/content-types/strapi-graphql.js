import axios from 'axios'
import { _format } from '../src/_format.js'
export async function graphql(API_URL, query) {
    let { data, error } = await axios.post(API_URL + '/graphql', { query })
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.error(err)
            return err.response.data
        })
    data = _format(data)
    return { data, error }
}