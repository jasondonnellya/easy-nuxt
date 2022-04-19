import axios from 'axios'
import { _format } from '~/plugins/easy-nuxt/strapi/src/_format.js'

export async function put({ endpoint, data }) {
    let response = await axios.post('/easy-nuxt/strapi/put', { endpoint, data })
    if(response.data) response.data = _format(response.data)
    return response
}