const { Router } = require('express')
const router=Router()
const movies = require('../sample.json')
const _ = require('underscore')

router.get("/",(req,res)=>{
    res.json(movies)
})
router.post("/",(req,res)=>{
    const {title, director, rating} = req.body
    if(title && director && rating){
        const id = movies.length+1
        const newMovie = {...req.body,id}
        movies.push(newMovie)
        console.log(movies)
        res.json(movies)
    }else{
        res.send("Error")
    }
})
router.delete("/:id",(req,res)=>{
    const { id } = req.params
    _.each(movies,(movie,i)=>{
        if(movie.id==id){
            movies.splice(i,1)
        }
    })
    console.log(req.params)
    res.send('deleted')
})
router.put("/:id",(req,res)=>{
    const { id }=req.params
    const {title, director, rating} = req.body
    if(title,director,rating){
        _.each(movies,(movie,i)=>{
            if(movie.id==id){
                movie.title=title
                movie.director=director
                movie.rating=rating
            }
        })
        res.json(movies)
    }else{
        res.send('datos incorrectos')
    }
})
module.exports=router
