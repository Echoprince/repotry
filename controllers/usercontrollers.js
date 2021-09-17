const Person = require('../utils/ageCalculator')

// let user = {
//     first_Name: String,
//     last_Name: String,
//     email: String,
//     password: String,
//     dob: String,
//     age: new Person(`${this.dob}`).calculateAge()

// }

let usersDB = []

const getAllUsers = (req, res, next) => {

    if(usersDB.length === 0){
        return res.json({message: 'You have no user in DB'})
    }
    res.json({message: 'All users found', result: usersDB})

}

const createUser = (req, res, next) => {
    const {first_Name, last_Name, email, password, dob, age} = req.body

    const userExist = usersDB.find(user => user.email === email)

    if(userExist){
        return res.json({message: 'User already Exist'})
    }

    let user = {first_Name, last_Name, email, password, dob, age}
    usersDB.push({first_Name, last_Name, email, age, password, dob})
    res.json({message: 'User added successfully', result: user})
}

const getASingleUserByEmail = (req, res, next) => {
    const {email} = req.params
    const user = checkUserExistence(email)

    res.json({message: 'User Successfully found', result: user})
}

const updateASingleUserByEmail = (req, res, next) => {
    const {email} = req.params
    const {first_Name, last_Name, password, dob, age} = req.body

    const user = checkUserExistence(email)

    user.first_Name = first_Name
    user.last_Name = last_Name
    user.password = password
    user.dob = dob
    user.age = age

    usersDB = usersDB.filter(user => user.email !== email)
    usersDB.push(user)
    res.json({message: `User with email ${email} successfully updated`, result: user})

}

const deleteASingleUserByEmail = (req, res, next) => {
    const {email} = req.params
    const user = checkUserExistence(email)
    usersDB =  usersDB.filter(user => user.email !== email)
    res.json({message: `User with email ${email} has been deleted successfully`})
}

//Helper Function
const checkUserExistence = (email) => {
    const user = usersDB.find(user => user.email === email)
    if(!user){
        return res.json({message: `User with email ${email} does not exist`})
    }

    return user
}

module.exports = {getAllUsers, getASingleUserByEmail, createUser, 
    deleteASingleUserByEmail, updateASingleUserByEmail}