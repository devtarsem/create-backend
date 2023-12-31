const fs = require('fs')
const prompt = require('prompt')


function Model(){
    fs.mkdirSync(`./${process.argv[2]}/model`)
}

function Controller(){
    fs.mkdirSync(`./${process.argv[2]}/controller`)
}

function Public(){
    fs.mkdirSync(`./${process.argv[2]}/public`)
    fs.mkdirSync(`./${process.argv[2]}/public/media`)
    fs.mkdirSync(`./${process.argv[2]}/public/data`)
    fs.mkdirSync(`./${process.argv[2]}/public/data/Auth`)
    fs.mkdirSync(`./${process.argv[2]}/public/media/images`)
    fs.mkdirSync(`./${process.argv[2]}/public/media/vidoes`)
    fs.mkdirSync(`./${process.argv[2]}/public/media/docx`)
    fs.mkdirSync(`./${process.argv[2]}/public/media/pdf`)
}

function Route(){
    fs.mkdirSync(`./${process.argv[2]}/routes`)

    const route = `
    const express = require('express')
    const router = express.Router()
    module.exports = router
    `

    fs.writeFileSync(`./${process.argv[2]}/routes/start.routes.js`, route)
}

function Middleware(){
    fs.mkdirSync(`./${process.argv[2]}/middleware`)

}

function Migrations(){
    fs.mkdirSync(`./${process.argv[2]}/migrations`)

}

function Services(){
    fs.mkdirSync(`./${process.argv[2]}/services`)

}

function Env(){
    fs.mkdirSync(`./${process.argv[2]}/environment`)
    const config = `
CONNECTION = YOUR DATABASE CONNECTION STRING GOES HERE
STRING = YOUR JWT SECRET GOES HERE
PORT = 4000
`
    fs.writeFileSync(`./${process.argv[2]}/environment/config.env`,config)
}

function Utility(){
    fs.mkdirSync(`./${process.argv[2]}/utility`)
}

function Git(){
    fs.writeFileSync(`./${process.argv[2]}/.gitignore`, 'node_modules/')
}

function App(){
    const app =  `
    const express = require('express')
    const cors = require('cors')
    const app = express()
    app.use(express.json())
    module.exports = app
    `
    fs.writeFileSync( `./${process.argv[2]}/app.js`, app)
}

function Server(){
    let server;
    console.log("hell")

    console.log(process.argv[3])
    if(process.argv[3]==='mongodb'){
        server = `
        const app = require('.app')
        const dotenv = require('dotenv')
        dotenv.config({path : "./environment/config.env"})
        const DBCONNECTION = mongoose.connect(process.env.CONNECTION).then(el=>{
            console.log("The Database is connnected")
        })
        
        const server = app.listen(process.env.PORT, (req, res)=>{
            console.log('The app is live')
        })    
        `
    }else{
        server = `
        const app = require('.app')
        const dotenv = require('dotenv')
        dotenv.config({path : "./environment/config.env"})
        const server = app.listen(process.env.PORT, (req, res)=>{
            console.log('The app is live')
        })    
        `
    }
    

    fs.writeFileSync(`./${process.argv[2]}/server.js`, server)
}

function Package(){
    const package = `
    {
        "name": "create-exp-backend",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1",
          "builder" : "node_modules/create-exp-backend/backbuilder.js"
        },
        "author": "tarsem",
        "license": "ISC",
        "dependencies": {
          "express": "^4.18.2"
        }
      }      
    `
    fs.writeFileSync(`./${process.argv[2]}/package.json`, package)

}

function ModelConstructor(){
    console.log("String - 1\t Number - 2\t Boolean - 3\t Date - 4")
    prompt.start();
    const inp = prompt.get(['Model_file_name', 'Schema_name', 'Model_name', 'schema_variables'], (err, result)=>{
        const variables = result.schema_variables.split(',')
        let schemaWritten = []
        variables.forEach(el=>{
            if(el.split('-')[1]=='1'){
                const obj = {
                    x : `${el.split('-')[0]} : {\ntype : String\n},\n`
                }
                schemaWritten.push(obj)
            }else if(el.split('-')[1]=='2'){
                const obj = {
                    x : `${el.split('-')[0]} : {\ntype : Number\n},\n`
                }
                schemaWritten.push(obj)
            }else if(el.split('-')[1]=='3'){
                const obj = {
                    x : `${el.split('-')[0]} : {\ntype : Boolean\n},\n`
                }
                schemaWritten.push(obj)
            }else if(el.split('-')[1]=='4'){
                const obj = {
                    x : `${el.split('-')[0]} : {\ntype : Date\n},\n`
                }
                schemaWritten.push(obj)
            }
        })
       

        let model;
        let innerVar;
        fs.readFile(`./${process.argv[2]}/model/damm.js`, 'utf8', function(err, data){
           innerVar = String(data)
        })


        model = `
const mongoose = require('mongoose')
const ${result.Schema_name} = new mongoose.Schema({
            `
    
        const finalApp= `})
const ${result.Model_name} = mongoose.model(${String(result.Model_name)}, ${result.Schema_name})
module.exports =  ${result.Model_name}
`

        fs.writeFileSync(`./${process.argv[2]}/model/${result.Model_file_name}`, model)
        schemaWritten.forEach(el=>{
            fs.appendFileSync(`./${process.argv[2]}/model/${result.Model_file_name}`, el.x, function(err){
            })
        })
        fs.appendFile(`./${process.argv[2]}/model/${result.Model_file_name}`, finalApp, (err)=>{console.log("written")})
    })

    
}



function routeConstructor(){
    prompt.start();
    const inp = prompt.get(['route_file_name'], (err,result)=>{
        const route = `
const express = require('express')
const router = express.Router()
module.exports = router
        `
    fs.writeFileSync(`./${process.argv[2]}/routes/${result.route_file_name}`, route)
    })
}



function CreateRoot(){
    
    console.log(fs.existsSync(`./${process.argv[2]}`))
    if (!fs.existsSync(`./${process.argv[2]}`)) {
        fs.mkdirSync(`./${process.argv[2]}`);
    } else{
        if(process.argv[3]=='schema'){
            ModelConstructor()
        }else if(process.argv[3]=='route'){
            routeConstructor()
        }
        return
    }

    Model()
    Controller()
    Public()
    Route()
    Env()
    Utility()
    Git()
    App()
    Server()
    Package()
    Middleware()
    Migrations()
    Services()

    
}





CreateRoot()