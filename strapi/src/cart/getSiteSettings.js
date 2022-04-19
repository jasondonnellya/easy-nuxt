import axios from 'axios'

export async function getSiteSettings(API_URL) {
    const { data } = await axios(API_URL + '/api/site')
        .then(res => { return res.data })
        .catch(err => { console.error(err) })
    return { site: data.attributes }
}