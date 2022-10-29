import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose' // to create mongoDB models
import cors from 'cors'
import dotenv from "dotenv"
import moduleRoutes from './routes/modules.js'
import userRoutes from './routes/users.js'
import uploadRoutes from './routes/upload.js'
import popUpRoutes from './routes/popUp.js'
import ListRoutes from './routes/lists.js'

const app = express()
dotenv.config()


app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/modules', moduleRoutes)
app.use('/users', userRoutes)
app.use('/upload', uploadRoutes)
app.use('/popup', popUpRoutes)
app.use('/list', ListRoutes)

app.get('/', (req, res) => {
    res.send('hello man')
})

const PORT = process.env.PORT || 5000;

mongoose.connect( process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
    .catch((error) => console.log(error.message))
