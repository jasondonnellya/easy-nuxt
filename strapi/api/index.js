import bodyParser from 'body-parser'
import express from 'express'
import cookieParser from 'cookie-parser';
const app = express()

app.use(bodyParser.json())
app.use(cookieParser(process.env.COOKIE_SECRET));

import login from './routes/login.js'
app.use(login)

import get from './routes/get.js'
app.use(get)

import post from './routes/post.js'
app.use(post)

import put from './routes/put.js'
app.use(put)

import stripe from './routes/stripe.js'
app.use(stripe)

// import register from './routes/register.js'
// app.use(register)

export default app