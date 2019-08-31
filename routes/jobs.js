const express = require('express');
const connection = require('../config/database');
const Job = require('../models/Job');

//database sync and authentication
Job.sync().then(console.log('db is syncing...')).catch(err=>console.log('There is an error with sync '+err))
connection.authenticate()
.then(console.log('The db is connected...'))
.catch(err=>console.log('There an error with authenicate '+err))
//route instance
const router = express.Router();

//get job list
router.get('/',(req,res)=>{
  Job.findAll()
  .then(data=>{
    console.log(data);
    res.render('jobs', {data});
  })
  .catch(err=>console.log('Problem with job findall '+ err))
})

//display add job form
router.get('/add',(req,res)=>res.render('add'))
//add a job
router.post('/add',(req,res)=>{
  const data={
    title: 'Looking for a Java developer',
    technologies:'javascript, html,css,wordpress',
    salary:'60000',
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
  }

  let {title,technologies,salary, description}=data;

  Job.create({
    title,technologies,salary,description
  })
  .then(job=>res.redirect('/jobs'))
  .catch(err=>console.log('Something is worg with create '+err))
})

module.exports =router;