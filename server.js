const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const userRouter = require('./routes/users')
const logger = require('./middlewares')

// app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.set('view engine', 'ejs')

app.get('/', logger, (req,res)=>{
 res.render('index', {example: 'world'})
})

app.use('/users', userRouter)



app.listen(port, ()=> {
 console.log(`Server is running on port ${port}`)
})