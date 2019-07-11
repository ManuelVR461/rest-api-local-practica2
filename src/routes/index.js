const { Router } = require('express')
const router = Router();

//routes
router.get('/',(req,res)=>{
    res.json({'titulo':'hola mundo'});
});

router.get('/persona',(req,res)=>{
    const data = {
        "nombre":"Manuel Ramirez",
        "cedula": 26670581
    }
    res.json(data);
});

module.exports = router;
