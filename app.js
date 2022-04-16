//requrimos modulo nativo

const path =require('path')

//requerimos el modulo express (tercero)
const express = require('express');

//adentro de app --> aplicacion express
const app = express();
//console.log(app);

//Definimos el puerto una vez, para usarlo las veces necesarias
const port = 3030;

app.use(express.static('public'));


app.get('/home' ,(req,res)=>{
res.sendFile(path.resolve('./views/index.html'))
})

app.get('/' ,(req,res)=>{
     res.sendFile(path.resolve('./views/index.html'))
     })

app.get('/babbage' ,(req,res)=>{
    res.sendFile(path.resolve('./views/babbage.html'))
    })
    
app.get('/berners-lee' ,(req,res)=>{
    res.sendFile(path.resolve('./views/berners-lee.html'))
    })   

app.get('/clarke' ,(req,res)=>{
     res.sendFile(path.resolve('./views/clarke.html'))
     })  
     
app.get('/hopper' ,(req,res)=>{
     res.sendFile(path.resolve('./views/hopper.html'))
     })  

app.get('/hamilton' ,(req,res)=>{
     res.sendFile(path.resolve('./views/hamilton.html'))
     })    

app.get('/lovelace' ,(req,res)=>{
     res.sendFile(path.resolve('./views/lovelace.html'))
     })  

app.get('/turing' ,(req,res)=>{
     res.sendFile(path.resolve('./views/turing.html'))
     })
app.get('*' ,(req,res)=>{
        res.send('No encontre la pagina que buscas')
        })    
app
//Funcion para ejecutar el servidor en un puerto especifico
app.listen(port,()=>{
    console.log('Servidor corriendo en el puerto '+port );
})
//app.use(express.static('public'));

