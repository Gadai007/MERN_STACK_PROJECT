const route = require('express').Router()
const User = require('../../models/User')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')

//@route POST api/users
//@dec Register an user
//@access public

route.post('/', (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        return res.status(400).json({ msg: 'Please register all the fields' })
    }

    User.findOne({ email: email })
        .then(user => {
            if (user) return res.status(400).json({ msg: 'User already exists' })

            const newUser = new User({
                name: name,
                email: email,
                password: password
            })

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err
                    newUser.password = hash
                    newUser.save()
                        .then(user => {

                            jwt.sign({ id: user._id }, config.get('jwtSecret'), { expiresIn: 3600 }, (err, token) => {
                                if (err) throw err

                                res.status(200).json({
                                    token,
                                    user: {
                                        id: user._id,
                                        name: user.name,
                                        email: user.email
                                    }
                                })
                            })

                        })
                })
            })
        })
})


module.exports = route