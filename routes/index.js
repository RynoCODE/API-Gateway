const express = require('express');
const router = express.Router();
const app = express();

router.all('/:apiName', (req,res)=>{
    console.log(req.params.apiName)
    res.send(req.params.apiName);
})

module.exports = router;
