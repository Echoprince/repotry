const express = require('express')
const app = express()
app.use(express.json())

app.use('/', (req, res, next) => {
    res.json('Hi There')
})

const port = 3000

app.listen(port, (req, res, next) => {
    console.log(`App is listening on port: ${port}`)
})