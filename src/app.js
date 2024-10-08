const express = require("express")
const app = express();
const port = 9100

// Routes 
app.get("/", function(req, res){
    res.json({
        healthy: true,
        date: new Date()
    })
});

app.get("/healthz", function(req, res){
    res.json({
        message: "The app is running smoothly",
        healthy: true,
        date: new Date()
    })
});


app.listen(port, function(){
    console.log(`App is running at http://localhost:${port} `)
})
