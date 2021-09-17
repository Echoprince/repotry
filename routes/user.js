const express = require('express')
const router = express.Router()

const {getAllUsers, getASingleUserByEmail, createUser,
     updateASingleUserByEmail, deleteASingleUserByEmail} 
     = require('../controllers/usercontrollers')

//ROUTE WITH /
router.route('/').get(getAllUsers)
.post(createUser)

//ROUTE WITH /:EMAIL
router.route('/:email').get(getASingleUserByEmail)
.put(updateASingleUserByEmail)
.delete(deleteASingleUserByEmail)

module.exports = router.route