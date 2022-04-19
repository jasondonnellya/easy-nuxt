import { Router } from 'express'
import axios from 'axios'

const router = Router()

// https://docs.strapi.io/developer-docs/latest/plugins/users-permissions.html#login
router.post('/logout', async (req, res) => {
    // remove cookie
    if(data && data.jwt) {
        // res.cookie('jwt', data.jwt, options)
    } else {
        
    }
  
    res.json({ data, error })
})

export default router