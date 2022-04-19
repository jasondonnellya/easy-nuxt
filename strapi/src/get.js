import axios from 'axios'
import { _format } from '~/plugins/easy-nuxt/strapi/src/_format.js'

export async function get({ endpoint, auth, API_URL }) {
    // https://spectrum.chat/strapi/general/how-to-get-data-from-authenticated-authorized-users~d148acf5-7e51-499c-925c-448ec7961bb0
    // GET /users/me with JWT Token gets 
    if(auth) {
        // call api use JWT token
        // https://stackoverflow.com/questions/70301738/no-relational-fields-in-response-strapi-v4
        let { data, error } = await axios.post('/easy-nuxt/strapi/get', { endpoint })
        if(data) data = _format(data)   
        return { data, error }
    } else {
        //call on client
        let { data, error } = await axios.get(API_URL + endpoint)
                    .then(res => { return res })
                    .catch(err => {
                        console.log(err)
                        return err.response.data
                    })
        if(data) data = _format(data) 
        return { data, error }
    }
}