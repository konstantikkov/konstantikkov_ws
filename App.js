const express = require('express')
const path = require('path')
const config = require('config')


const app = express()

app.use(express.json({ extended: true }))

if(process.env.NODE_ENV==='production'){
    app.use('/', express.static(path.join('konstantikkov_ws', 'client', 'build')));

    app.get('*', (req, res)=>{
        console.log(__dirname)
        res.sendFile(path.resolve('konstantikkov_ws', 'client', 'build', 'index.html'))
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