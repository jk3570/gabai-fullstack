const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupUser = async (req, res) => {
  const {
    username,
    firstname,
    lastname,
    sex,
    birthdate,
    region,
    city,
    email,
    password
  } = req.body

    // Check if all required fields are provided
  if (!username || !firstname || !lastname || !sex || !birthdate || !region || !city || !email || !password) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    const user = await User.signup(
      username,
      firstname,
      lastname,
      sex,
      birthdate,
      region,
      city,
      email,
      password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = { signupUser, loginUser }