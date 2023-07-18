const express = require('express')
const router = new express.Router()
const weatherController = require('../../controllers/weatherController')

router.get('/',(req,res)=>{
    res.send('hi')
})

router.get('/weathers', weatherController.index)
router.get('/weathers/:id', weatherController.show)
router.post('/weathers', weatherController.store)
router.delete('/weathers/:id', weatherController.delete)
router.get('/weathers/:id', weatherController.update)

//create a posts endpoint create / view all / view one / update / delete

//In there own controller return the method name (eg: res.send('view all'))

//Add a validation for weathers.get endpoint to ensure that the city = string type

//package name express-validator

router.get('/posts', (req,res)=>{
    res.send('get all post')
})

router.get('/posts/:id', (req,res)=>{

    res.send('get post by id')

})

router.put('/posts', (req,res)=>{

    const {id} = req.body

    res.send('update post by id')

})

router.delete('/posts/:id', (req,res)=>{

    const {id} = req.params

    res.send('delete post by id')

})


module.exports = router