const express=require('express')
const morgan=require('morgan')
const app = express()
//SETTINGS
app.set('port',process.env.PORT||3000)
app.set('json spaces',2)

//MIDDLEWARES
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//ROUTES
app.use(require('./routes/index'))
app.use('/api/movies',require('./routes/movies'))
app.use('/api/users',require('./routes/users'))

//SERVER
app.listen(app.get('port'),()=>{
    console.log("Server ON PORT",app.get('port'))
})