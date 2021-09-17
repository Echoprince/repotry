const express = require('express')
const userRoutes = require('./routes/user')

const app = express()
app.use(express.json())

const port = 3000

app.use('/api/users',userRoutes)

app.listen(port, (req, res, next) => {
    console.log(`App is listening on port: ${port}`)
})