const express = require('express');
const axios = require('axios');
const router = express.Router();
const registry = require("./registry.json");

// const app = express();

router.all('/:apiName/:path', (req,res)=>{
    console.log(req.params.apiName)
    if(registry.services[req.params.apiName]){
        axios({
            method: req.method,
            url: registry.services[req.params.apiName].url + req.params.path,
            headers: req.headers,
            data: req.body
        }).then((response)=>{
            res.send(response.data);
        })
    }
    res.send("API DOESNT EXIST");
    console.log("Invalid API ENTERED");
}) 

module.exports = router;
