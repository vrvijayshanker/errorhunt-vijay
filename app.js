
//Part #1, No.1: 'npm install' for node_modules

const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');

//HEROKU
require('dotenv').config();


//Part #1, No.2: added body-parser, which was the missing third party module
const bodyParser = require("body-parser");

//Part #2, No.6: The Below section is moved to a static file in public/navs.js

// const nav= [
//     {
//         link:"/books",
//         title:"Books"
//     },
//     {
//         link:"/authors",
//         title:"Authors"
//     },
//     {
//         link:"/addbook",
//         title:"Add Book"
//     },
//     {
//         link:"/addauthor",
//         title:"Add Author"
//     }
// ]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');

//Part #1, No.3: Changed ..../homeroute  to  ..../homerouter
const homeRouter = require('./src/routes/homerouter');
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');


const app = new express; 


app.set('views','./src/views'); 
app.set('view engine','ejs'); 

//Part #2, No.7: I hope this is how cors is used
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{});
    
});





app.listen(process.env.PORT || 5000,()=>{
    //Part #1, No.5: "server ready on 3000" --> "server ready on 5000"
    console.log("Server Ready on 5000");
});

//OLD CODE
// app.listen(5000,()=>{
//     //Part #1, No.5: "server ready on 3000" --> "server ready on 5000"
//     console.log("Server Ready on 5000");
// });