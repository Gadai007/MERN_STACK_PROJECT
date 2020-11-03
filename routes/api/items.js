const route = require('express').Router()
const Items = require('../../models/Item')
const auth = require('../../middleware/auth')

//@route GET api/items
//@dec Get all items
//@access public

route.get('/', (req, res) => {
    Items.find()
        .sort({ date: -1 })
        .then(items => {
            res.status(200).json(items)
        })
})

//@route POST api/items
//@dec Create an item
//@access private

route.post('/', auth, (req, res) => {
    const newItem = new Items({
        name: req.body.name
    })

    newItem.save()
        .then(item => {
            res.status(200).json(item)
        })
})
//@route POST api/items
//@desc  Delete an item
//@access private

route.delete('/:id', auth, (req, res) => {
    Items.deleteOne({_id: req.params.id}, (err) => {
        if(!err){
            res.json({success: true})
        }else{
            res.status(404).json({success: false})
        }
    })
})

module.exports = route