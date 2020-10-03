const express = require('express')
const cors = require('cors')
const data = require('./data')

const app = express()

app.use(cors())

app.get('/tweets', (_, res) => {
    return res.status(200).json(data)
})

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`GET /tweets at port ${port}`)
})