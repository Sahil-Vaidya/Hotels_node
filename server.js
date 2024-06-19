const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());//req.body



app.get('/', function (req, res) {
  res.send('welcome to our hotel');
});

// app.get('/video', (req,res)=> {
//     res.send('welcome to video chat');
// });

// app.get('/idli', (req, res) => {
//     var customized = {
//         name: 'rava idli',
//         size: '10 cm long',
//         is_sambhar: true
//     };

//     res.json(customized);
// });



//import the router files
const personroutes = require('./routes/personRoutes');
const menuitems = require('./routes/menuroutes');

//use the router
app.use('/person',personroutes);
app.use('/menu',menuitems);




app.listen(3001 , ()=>{
    console.log("server is listning on port 3001");
});