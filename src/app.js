const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const app = express();


//configuraciones
app.set("port",process.env.port || 3001);
app.set("views", path.join(__dirname,"views"));
app.set("view engine","pug");
//middlewares
app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(session({
    secret: "hola mundo",
    resave: false,
    saveUninitialized: false
}));

//rutas
app.use('/',require('./routes/routers'));

app.listen(app.get('port'),()=>{
    console.log(`server on port ${app.get('port')}`);
});


