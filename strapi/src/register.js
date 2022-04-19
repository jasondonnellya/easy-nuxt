import axios from 'axios'

export async function register({ username, email, password, API_URL }) {
    // https://docs.strapi.io/developer-docs/latest/plugins/users-permissions.html#registration
    const { data, error } = await axios.post(API_URL + '/api/auth/local/register', { username, email, password }, { 'Content-Type': 'application/json' })
                .then(res => { return res.data ? res.data : { data: null } })
                .catch(err => {
                    console.error(err)
                    return err.response.data
                })
    return { data, error }
}