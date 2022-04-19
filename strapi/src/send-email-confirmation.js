import axios from 'axios'

export async function sendEmailConfirmation({ email, API_URL }) {
    // https://docs.strapi.io/developer-docs/latest/plugins/users-permissions.html#email-validation
    const { data, error } = await axios.post(API_URL + '/api/auth/send-email-confirmation', { email })
                .then(res => { return res })
                .catch(err => {
                    console.error(err)
                    return err.response.data
                })
    return { data, error }
}