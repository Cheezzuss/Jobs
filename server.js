const express = require('express');
const path =require('path')
const ejs =require('ejs');

//intance
const app = express();
//ejs
app.set('view engine','ejs')
app.set('views','views')

//set static folder

app.use(express.static(path.join(__dirname,'public')))

//index route
app.get('/',(req,res)=>res.render('index'));

//routes
app.use('/jobs',require('./routes/jobs'));


//port and listen
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`Server is running on ${PORT}`));