import axios from 'axios'

export async function forgotPassword({ email, API_URL }) {
    // https://docs.strapi.io/developer-docs/latest/plugins/users-permissions.html#forgotten-reset-password
    const { data, error } = await axios.post(API_URL + '/api/auth/forgot-password', { email })
                .then(res => { return res })
                .catch(err => {
                    console.error(err)
                    return err.response.data
                })
    return { data, error }
}