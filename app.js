const express       = require("express")
const app           = express()
const db            = require('./db/connection')
const bodyParser    = require('body-parser')

const PORT = 3000

app.listen(PORT,function(){
    console.log(`Express rodando na porta ${PORT}`)
})

//body parser
app.use(bodyParser.urlencoded({ extended: false }))

//db connection
db
    .authenticate()

    .then(() => {
        console.log("Conectou com o banco de dados")
    })
    .catch(err => {
        console.log("Ocorreu erro ao conectar", err)
    })

//routes
app.get("/", (req, res) =>{
    res.send("Está Funcionando joao") 
})

// jobs route
app.use('/jobs', require('./routes/job'))
