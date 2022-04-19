import axios from 'axios'

export async function login({ identifier, password }) {
    const { data, error } = await axios.post('/easy-nuxt/strapi/login', { identifier, password })
                .then(res => { return res.data ? res.data : { data: null } })
    return { data, error }
}