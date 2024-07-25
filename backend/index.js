const connectToMongo=require('./database.js')
connectToMongo();


const dotenv=require('dotenv')
dotenv.config({path:"./config.env"})

//copied from expressjs documentation:  https://expressjs.com/en/starter/hello-world.html
const express = require('express')
const app = express()
const port = process.env.PORT || 5000



//cors= for api call from frontend we need this 
var cors=require('cors')
app.use(cors())


//use middleware otherwise u won't be able to send request in json format
app.use(express.json())

//import routes 
const notes=require("./Route1/Note1.js")
const user=require("./Route1/Authenticated1.js")
app.use("/api/auth",user)
app.use("/api/notes",notes)



//backend + frontend same port=5000
// const path=require("path")
// app.use(express.static(path.join(__dirname,"../build")))
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname,"../build/index.html"))
// })



app.get("/",(req,res)=>{
  res.send("application deployed successfully ")
})



app.listen(port, () => {
  console.log(`backend is listening on port ${port}`)
})