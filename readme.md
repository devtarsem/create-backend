# Create-exp-backend

Well, all the react users are familair with create react app CLI that is very easlity arctitect the React application and that is the frontend paart of a web application but what about backend.
The most popular framework for backend is the express framework so i welcome you all in our create-exp-backend package that just like create-react-app will easlily build the backend archietecture for you. let's see the detailing of the package.


# Installation

To install you have to run the command in  your new project as
```
npm init
npm i create-exp-backend
```

## How the archietecture looks in create-exp-backend

When we run our package we get our archietecture ready for our project
the archietecture incudes the following structure
```
Project folder
model
controller
public
	media
		video
		image
		pdf
		docx
	data
		auth
middlewear
routes
environment
migrations
.gitignore
app.js
package.json
services
server.js
```
we will get the above archietecture, but wait if you think that we get only empty folders, you are wrong we will set all for you , the package will make the setup ready for you by adding server, app, connection code in respective files, the code is shown as below

## server.js
```JavaScript 

const  app = require('.app')

const  dotenv = require('dotenv')

dotenv.config({path :  "./environment/config.env"})

const  server = app.listen(process.env.PORT, (req, res)=>{
	console.log('The app is live')
})
```

## app.js
```JavaScript
const  express = require('express')

const  cors = require('cors')

const  app = express()

app.use(express.json())

module.exports = app
```

## config.env
```
CONNECTION = YOUR DATABASE CONNECTION STRING GOES HERE
STRING = YOUR JWT SECRET GOES HERE
PORT = 4000
```
## .gitignore
```git
node_modules/
../environment/config.env
```

## package.json
```Json
{

"name": "backend-test",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
},
"author": "",
"license": "ISC",
"dependencies": {
"create-exp-backend": "^1.0.1"
}
}
```

## core features available 

 1. we will able to build express core archietecture along with server setup.
 2. with our CLI library you are able to write down the Schema for the mongoose , if you using mongoDB as database
 3. with our CLI library you are able to write the routes files with automatic router enabled

##  How to use the package

Open up your code editor and in the CLI initiate a project but hitting `npm init`
that create a `package.json` for you then run `npm i create-exp-backend`
that loads the necessary package needed.
```JavaScript
npm init
npm i create-exp-backend
```
#### To build the archietecture
to build you have to run the follow command
``` CLI
node node_modules/create-exp-backend/backbuild.js "Your project name" 
```
now after running this your project is setup, go to the setup directory and run `npm install`, it loads all the packages

this structure is generated
```
Project folder
model
controller
public
	media
		video
		image
		pdf
		docx
	data
		auth
middlewear
routes
environment
migrations
.gitignore
app.js
package.json
services
server.js
```

### How to write Schema with CLI
To write schema you have to execute following command
```
node node_modules/create-exp-backend/backbuild.js "Your project name" "schema"
```
now after running this you have to fill out the necessary things and these things as follow
```
prompt : File name : "Entre your model file name"

prompt : Schema name : "Entre your Schema name"

prompt : Model name : "Entre your model name"

Prompt : Schema variables : username-1, email-1, password-2, date-4
```
to understand how schema variables works and how to add them
in the schema variables you have to write the required fields of schema as above we write it as username, password, email, date
now what is the -1,-2,-3,-4 that are aligned with the variables name , these numbers determined the variable type of the variable
```
String - 1 
Number - 2 
Boolean - 3 
Date - 4
```
let's see the output by using this CLI feature
```
prompt : File name : "Authentication.model.js"

prompt : Schema name : "NewAccountOpen"

prompt : Model name : "SignUp"

Prompt : Schema variables : username-1, email-1, password-2, date-4, isTrue-3
```
In output a new file is created with name as Authentication.model.js
```
Authentication.model.js

const  mongoose = require('mongoose')

const  NewAccountOpen= new  mongoose.Schema({

username: {

type :  String

},

pssword : {

type :  Number

},

email : {

type : String

}
,
date: {

type : Date

}
,
isTrue: {

type : Boolean

}
,
})

const  SignUp= mongoose.model(SignUp, NewAccountOpen)

module.exports = NewAccountOpen
```

### How to write routes file with CLI
to write the route file you have to write the following command
```
node node_modules/create-exp-backend/backbuild.js "Your project name" "route"
```
in the CLI you have to put the file name and then hit entre and your file is created
Following code is written in your file automatically
```
const  express = require('express')

const  router = express.Router()

module.exports = router
```
now with the above commands will reduce your code writing time drastically
### About Author
author - Tarsem singh

linkedin - https://www.linkedin.com/in/tarsem-singh-a57022204/
