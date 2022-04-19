import { Router } from 'express'
import axios from 'axios'

const router = Router()

// https://forum.strapi.io/t/strapi-v4-cant-access-custom-fields-from-users-me-via-graphql/13744
router.post('/get', async (req, res) => {
  // sanitise req.body
  const { endpoint } = req.body
  const { jwt } = req.signedCookies
  const headers = {
    Authorization: `Bearer ${jwt}`
  }

  const { data, error } = await axios.get(process.env.API_URL + endpoint, { headers })
                        .then(res => { return res })
                        .catch(err => {
                          console.log(err)
                          return err.response
                        })
  res.json({ data, error })
})

export default router