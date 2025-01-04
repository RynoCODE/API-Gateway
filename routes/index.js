const express = require('express');
const axios = require('axios');
const router = express.Router();
const registry = require("./registry.json");
const fs = require('fs');

// const app = express();

router.all('/:apiName/:path', (req, res) => {
    console.log(req.params.apiName)
    if (registry.services[req.params.apiName]) {
        axios({
            method: req.method,
            url: registry.services[req.params.apiName].url + req.params.path,
            headers: req.headers,
            data: req.body
        }).then((response) => {
            res.send(response.data);
        })
    }
    res.send("API DOESNT EXIST");
    console.log("Invalid API ENTERED");
})

router.post('/register', (req, res) => {
    const registrationInfo = req.body;
    if(apiAlreadyExists(registrationInfo)){ //apiAlreadyExists functions required
        res.send("Configuration Already Exists for " + registrationInfo.apiName)
    } else{
        registry.services[registrationInfo.apiName].push({ ...registrationInfo })
        fs.writeFile('./routes/registry.json',
            JSON.stringify(registry),
            (error) => {
                if (error) {
                    res.send("Couldnt Register" + registrationInfo.apiName + '\n' + error);
                } else {
                    res.send("Registered Successfully " + registrationInfo.apiName)
                }
            }
        )
    }
})

module.exports = router;
