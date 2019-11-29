const express = require('express');
const cors =  require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const morgan = require('morgan');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//connect to db

mongoose.connect('mongodb://localhost/mcga', (err, res)=>{
    if(err) console.log('error trying connect');
    else console.log('connection success')
});


//Set up application
app.set('port', 3000);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

//Set up middlewares
app.use(morgan('dev'));

//routes
app.use('/api/',require('./routes/common.js'));
app.use('/api/',require('./routes/todo.js'));
app.use('/api/users',require('./routes/user.js'));

//start's server
app.listen(app.get('port'), () =>{
    console.log("Server runing on port 4000")
});


