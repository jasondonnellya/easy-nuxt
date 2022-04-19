import axios from 'axios'
import { _format } from '~/plugins/easy-nuxt/strapi/src/_format.js'

export async function post({ endpoint, data }) {
    let response = await axios.post('/easy-nuxt/strapi/post', { endpoint, data })
    if(response.data) response.data = _format(response.data)
    return response
}