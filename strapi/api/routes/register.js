import { Router } from 'express'
import axios from 'axios'

const router = Router()

router.post('/register', async (req, res) => {
  // https://docs.strapi.io/developer-docs/latest/plugins/users-permissions.html#registration
  const { username, email, password } = req.body
  const { data, error } = await axios.post(process.env.API_URL + '/auth/local/register', { username, email, password })
                        .then(res => { return res })
                        .catch(err => {
                          console.error(err)
                          return { error: err.response.data }
                        })
  // SET JWT Token as HTTP-ONLY Cookie with data
  res.json({ data })
})

export default router