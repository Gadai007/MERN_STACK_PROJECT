const route = require('express').Router()
const Items = require('../../models/Item')

//@route GET api/item
//@dec Get all items
//@access public

route.get('/', (req, res) => {
    Items.find()
        .sort({ date: -1 })
        .then(items => {
            res.status(200).json(items)
        })
})

//@route POST api/item
//@dec Create an item
//@access public

route.post('/', (req, res) => {
    const newItem = new Items({
        name: req.body.name
    })

    newItem.save()
        .then(item => {
            res.status(200).json(item)
        })
})
//@route POST api/item
//@desc  Delete an item
//@access public

route.delete('/:id', (req, res) => {
    Items.deleteOne({_id: req.params.id}, (err) => {
        if(!err){
            res.json({success: true})
        }else{
            res.status(404).json({success: false})
        }
    })
})

module.exports = route