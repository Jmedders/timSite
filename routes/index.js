require('dotenv').config();
var knex = require('../db/knex');
var jwt = require('jsonwebtoken');
var bearerToken = require('express-bearer-token');
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var token;
var errors;

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/blogging', function(req,res,next){
  if(!req.body.text){
    res.json({errors: 'must submit text to post a new blog'})
  }
  knex('blogs').insert({
    postdate: req.body.date,
    post: req.body.text
  }).then(function(data){
    res.json({data: 'submitted'})
  }).catch(function(err){
    res.json({errors: 'that was strange, try again'})
  })
})
router.post('/login', function(req, res, next){
  knex('users')
  .where({
    username: req.body.username
  })
  .first()
  .then(function(data){
    if(!data){
      res.json({errors: 'username or password is incorrect'})
    } else if(bcrypt.compareSync(req.body.password, data.password)){
      token = jwt.sign({id: data.id, usernautme: data.username, is_admin: data.is_admin}, process.env.SECRET);
      res.json({token:token});
    } else {
      res.json({errors: 'username or password is incorrect'})
    }
  }).catch(function(err){
    next(err);
  })
})

module.exports = router;
