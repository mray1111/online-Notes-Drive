const connectToMongo=require('./db')
connectToMongo();




//copied from expressjs documentation:  https://expressjs.com/en/starter/hello-world.html
const express = require('express')
const app = express()
const port = 5000



//cors= for api call from frontend we need this 
var cors=require('cors')
app.use(cors())


//use middleware otherwise u won't be able to send request in json format
app.use(express.json())

//import routes 
const user=require("./routes/auth")
const notes=require("./routes/notes")
app.use("/api/auth",user)
app.use("/api/notes",notes)



//backend + frontend same port=5000
// const path=require("path")
// app.use(express.static(path.join(__dirname,"../build")))
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname,"../build/index.html"))
// })







app.listen(port, () => {
  console.log(`backend is listening on port ${port}`)
})