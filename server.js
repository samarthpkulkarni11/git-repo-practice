const express = require('express');
const app = express();

const PORT = process.env.PORT || 4004;

app.get("/", (res)=>{
    res.send("hello from / route!!")
})

app.listen(PORT, ()=>{
    console.log(`Server listening at ${PORT}`)
})