require('dotenv').config()
const express = require('express')
var hbs = require('hbs');
const app = express()
const port = process.env.PORT 

// Handlebar 
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials', );




//servir contenido estatico
app.use(express.static('public'))

app.get('/', function(req,res){
    res.render('home', {
        nombre: 'wilson alexander',
        titulo: 'curso de node'
    })
})

app.get('/generic', function(req,res){
    res.render('generic',{
        nombre: 'wilson alexander',
        titulo: 'curso de node'
    })
})



app.get('/elements', function(req,res){
    res.render('elements',{
        nombre: 'wilson alexander',
        titulo: 'curso de node'
    })
})




app.get('*', function(req,res){
    res.sendFile(__dirname + '/public/404.html')
})



app.listen(port)