const express = require('express')
const path = require('path')
const app = express()

if(process.env.NODE_ENV==='production'){
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}


async function  start(){
    try{
        app.listen(3000, ()=> console.log(`App has been started on ${80}`))
    }
    catch (e){
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start()