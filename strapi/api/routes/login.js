import { Router } from 'express'
import axios from 'axios'

const router = Router()

// https://docs.strapi.io/developer-docs/latest/plugins/users-permissions.html#login
router.post('/login', async (req, res) => {
  // sanitise req.body
  const { identifier, password } = req.body
  const { data, error } = await axios.post(process.env.API_URL + '/api/auth/local', {identifier, password})
                          .then(res => { return res })
                          .catch(err => {
                            console.error(err)
                            return err.response.data
                          })
  if(data && data.jwt) {
    const [ms, s, m, h] = [1000, 60, 60, 48]
    let options = {
      maxAge: ms * s * m * h, // would expire after 48 hours
      httpOnly: true, // The cookie only accessible by the web server
      signed: process.env.COOKIE_SECRET ? true : false // Indicates if the cookie should be signed
    }
    res.cookie('jwt', data.jwt, options)
  }
  
  res.json({ data, error })
})

export default router