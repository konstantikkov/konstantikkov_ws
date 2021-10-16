const express = require('express')
const path = require('path')
const config = require('config')


const app = express()

app.use(express.json({ extended: true }))

if(process.env.NODE_ENV==='production'){
    app.use('/', express.static(path.join('client', 'build')));

    app.use('/', express.static(path.join('interactive_map')));

    app.get('/interactive_map', (req, res)=>{
        res.sendFile(path.resolve('interactive_map', 'index.html'))
    });

    app.get('*', (req, res)=>{
        res.sendFile(path.resolve('client', 'build', 'index.html'))
    })
}

const PORT = config.get('port')

async function  start(){
    try{
        app.listen(PORT, ()=> console.log(`App has been started on ${PORT}`))
    }
    catch (e){
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start()