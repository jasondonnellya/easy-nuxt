import axios from 'axios'

export async function resetPassword({ code, password, passwordConfirmation, API_URL }) {
    // https://docs.strapi.io/developer-docs/latest/plugins/users-permissions.html#forgotten-reset-password
    // https://forum.strapi.io/t/email-template-modification/694/9
    const { data, error } = await axios.post(API_URL + '/api/auth/reset-password', { code, password, passwordConfirmation })
                .then(res => { return res })
                .catch(err => {
                    console.error(err)
                    return err.response.data
                })
    return { data, error }
}