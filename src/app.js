import express from 'express'
import Handlebars from 'handlebars'
import {ExpressHandlebars, engine} from "express-handlebars"
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access'
import { webRouter } from './routers/webRouter.js'
import config from './config.js'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'

const app = express()

app.listen(8080, () => {
    console.log("Listening in port 8080")
})

mongoose.connect(config.cnxStr)

app.engine("handlebars", engine({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}))
app.set('views', './views')
app.set('view engine', 'handlebars')

app.use('/static', express.static('./static'))
app.use(express.json())
app.use(cookieParser())
app.use('/', webRouter)
