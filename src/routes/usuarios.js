const { Router } = require('express');
const router = Router();
const _ = require('underscore');
const usuarios = require('../ejemplo.json');

router.get('/',(req,res)=>{
    res.json(usuarios);
});

router.post("/",(req,res)=>{
    console.log(req.body);
    const { titulo, usuario,nombre} = req.body;

    if (titulo && usuario && nombre){
        const id = usuarios.length + 1;
        const newUsuario = {...req.body,id};
        usuarios.push(newUsuario);
        res.json(usuarios);
    }else{
        res.status(500).json("faltan datos")
    }
})

router.put('/:id',(req,res) => {
    const { id } = req.params;
    const { titulo, usuario,nombre} = req.body;
    if (titulo && usuario && nombre){
        _.each(usuarios,(user, i)=>{
            if( user.id == id){
                user.titulo = titulo;
                user.usuario = usuario;
                user.nombre = nombre;
            }
        });
        res.json(usuarios);
    }else{        
        res.status(500).json(usuarios);
    }
    
})

router.delete('/:id',(req,res) => {
    const { id } = req.params;
    _.each(usuarios,(usuario, i)=>{
        if(usuario.id == id){
            usuarios.splice(i,1);
        }
    })
    res.json(usuarios);
})

module.exports = router;