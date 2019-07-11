const express = require('express');
const app = express();
const morgan = require('morgan');

//setting
app.set('port', process.env.PORT || 3000);
app.set('json spaces',2);

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
//app.get('/',(req,res)=>{
//    res.send({'titulo':'hola mundo'}); ---> los importamos a otro archivo
//});
app.use(require('./routes/index'));
app.use('/api/usuarios',require('./routes/usuarios'));
app.use('/api/personas',require('./routes/personas'));

//Empesando el servidor
app.listen(app.get('port'),()=>{
    console.log("server on port: " + app.get('port'));
})



