const route = require('express').Router()
const User = require('../../models/User')
const config = require('config')
const auth = require('../../middleware/auth')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//@route POST api/auth
//@dec Auth an user
//@access public

route.post('/', (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ msg: 'complete all fields' })
    }

    User.findOne({ email: email })
        .then(user => {
            if (!user) return res.status(400).json({ msg: 'user does not exists' })

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json({ msg: 'Invalid Credientials' })

                    jwt.sign({ id: user._id }, config.get('jwtSecret'), { expiresIn: 3600 }, (err, token) => {
                        if (err) throw err

                        res.json({
                            token,
                            user: {
                                id: user._id,
                                name: user.name,
                                email: user, email
                            }
                        })
                    })
                })
        })
})

//@route GET api/auth/user
//@dec get user data
//@access private

route.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => {
            res.json(user)
        })
} )

module.exports = route