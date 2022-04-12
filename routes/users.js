const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const logger = require('../middlewares')

// router.use(logger)
const users = [{ name: 'Christopher' }, { name: 'Alberto' }]

router.get('/', (req, res) => {
 console.log(req.query.name)
  res.send('User list')
})

router.get('/new', (req, res) => {
  res.render('users/new')
})

router.post('/', (req, res) => {
 const isValid = false
 if(isValid){
  users.push({ firstName: req.body.firstName })
  res.redirect(`users/${users.length - 1}`)
 }else {
  console.error()
  res.render('users/new', {firstName: req.body.firstName})
 }
})

router
  .route('/:id')
  .get((req, res) => {
    console.log(req.user)
    res.send(`Get the user by the id of ${req.params.id}`)
  })
  .put((req, res) => {
    res.send(`Update the user by the id of ${req.params.id}`)
  })
  .delete((req, res) => {
    res.send(`Delete the user by the id of ${req.params.id}`)
  })


  

router.param('id', (req, res, next, id)=>{
 req.user = users[id]
 next()
})

module.exports = router
