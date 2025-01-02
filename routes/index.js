const express = require('express');
const axios = require('axios');
const router = express.Router();
const registry = require("./registry.json");

// const app = express();

router.all('/:apiName/:path', (req,res)=>{
    console.log(req.params.apiName)
    if(registry.services[req.params.apiName]){
        axios.get(registry.services[req.params.apiName].url + req.params.path).then((response)=>{
            res.send(response.data);
        })
    }
    res.send("API DOESNT EXIST");
    console.log("Invalid API ENTERED");
}) 

module.exports = router;
