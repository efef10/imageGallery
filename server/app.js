const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/pictures',async (req,res)=>{
    let data = await fs.readFileSync(`${__dirname}/lib/pictures.json`);
    res.json(JSON.parse(data.toString()));
})

app.post('/pictures',async (req,res)=>{
    let data = await fs.readFileSync(`${__dirname}/lib/pictures.json`);
    data = JSON.parse(data.toString());
    data.pictures.push(req.body.src);
    fs.writeFileSync(`${__dirname}/lib/pictures.json`, JSON.stringify(data));
    res.json(data);
})


app.listen(4000,()=>{
    console.log("listenning")
})