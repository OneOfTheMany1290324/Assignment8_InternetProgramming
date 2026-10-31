

// This creates the express server
const express = require("express");
const app = express()
// const app sets up the actual server proper.

app.use(express.json())

// This allows the server to choose which port to run on.
app.listen(3000);

// Setup route
// routes: app.get,post,delete,put,patch

// request and response
app.get('/', (req, res) => {

    console.log("Here")
    res.sendStatus(500)
    res.send("This is my server now!")

})


app.get('/', (req, res) => {

    console.log("Here")
    // res.send("server.js")
    res.send ("This is my server now!")

})
