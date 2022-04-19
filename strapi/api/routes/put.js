import { Router } from 'express'
import axios from 'axios'

const router = Router()

router.post('/put', async (req, res) => {
  // https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/populating-fields.html#component-dynamic-zones
  // sanitise req.body
  const { endpoint } = req.body
  const bodyData = req.body.data
  const { jwt } = req.signedCookies
  const headers = {
    Authorization: `Bearer ${jwt}`
  }
  const { data, error } = await axios.put(process.env.API_URL + endpoint, { data: bodyData }, { headers })
                        .then(res => { return res })
                        .catch(err => {
                          console.error(err)
                          return err.response.data
                        })
  res.json({ data, error })
})

export default router