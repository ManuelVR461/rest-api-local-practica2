const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch');

router.get('/',async (req,res)=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const lista = await response.json();
    res.json(lista);
});

module.exports = router;